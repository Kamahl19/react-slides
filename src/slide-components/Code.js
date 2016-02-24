/* eslint no-new-func:0 */

import React, { Component, PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import { transform } from 'babel-standalone';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/theme/monokai.css';

import './code.less';

function babelTransform(code) {
    return transform(code, { presets: ['es2015', 'stage-0', 'react'] }).code;
}

export default class Code extends Component {
    static propTypes = {
        value: PropTypes.string,
        language: PropTypes.string,
        theme: PropTypes.string,
        useBabel: PropTypes.bool,
    };

    static defaultProps = {
        value: '',
        language: 'javascript',
        theme: 'monokai',
        useBabel: true,
    };

    constructor(props) {
        super(props);

        this.onChange = ::this.onChange;
    }

    state = {
        code: this.props.value,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.refs.codeMirror.getCodeMirror().setValue(nextProps.value);
        }
    }

    onChange(code) {
        this.setState({ code });
    }

    codeMirrorOptions = {
        mode: this.props.language,
        theme: this.props.theme,
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Shift-F9': () => {
                if (this.props.language !== 'javascript') {
                    return;
                }

                const code = (this.props.useBabel) ? babelTransform(this.state.code) : this.state.code;

                new Function(code)();
            },
            'Alt-a': (cm) => {
                cm.setOption('fullScreen', !cm.getOption('fullScreen'));
            },
            Esc: (cm) => {
                if (cm.getOption('fullScreen')) {
                    cm.setOption('fullScreen', false);
                }
            },
        },
        styleActiveLine: true,
        autoCloseBrackets: true,
    };

    render() {
        return (
            <div className="code">
                <CodeMirror
                    value={this.state.code}
                    onChange={this.onChange}
                    options={this.codeMirrorOptions}
                    ref="codeMirror"
                />
            </div>
        );
    }
}
