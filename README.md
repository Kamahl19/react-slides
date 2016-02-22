# React Slides
Presentation Library based on ReactJS

## How to Present
- Run `npm start`
- Open `localhost:3000` in two browser windows in 2 different screens
- On your screen, press F10 to open **presenter mode**
- Any windows/tabs in the same browser running React Slides will synchronize to one another

## Controls
|Key Combination|Function|
|---|---|
|Right Arrow|Next Slide|
|Left Arrow|Previous Slide|
|Media Button Next|Next Slide|
|Media Button Previous|Previous Slide|
|Space|Next Slide|
|F10|Toggle Presenter Mode|
|F9 while focus in Code Editor|Run JS code from Code Editor|
|F11 while focus in Code Editor|Toggle Fullscreen Mode of Code Editor|

## Creating Presentation
Files representing presentation slides will live in `/src/slides` folder.

The main `.js` file you write your presentation in is `/src/slides/index.js`. There you can include your slide files.

Each slide file should export an object with 2 properties: `content` and `notes`: 
- `content` is `required` and can contain JSX or custom React component. You can also use any preddefined components lile `Link`, `Code`, `Icon` and others
- `notes` is `optional` and may contain an array of strings representing your notes shown in Presenter mode

## Preddefined Components
### Link
This component adds a link to your presentation.

|Name|PropType|Default|Description|
|---|---|---|---|
| href | PropTypes.string.isRequired | - | Link target |
| external | PropTypes.bool | `true` | Open in new tab |
| children | PropTypes.node | `<Icon name="external-link" />` | Clickable text or node |

### Code
This component adds a code editor to your presentation.

|Name|PropType|Default|Description|
|---|---|---|---|
| value | PropTypes.string | - | Initial code value |
| language | PropTypes.string | javascript | [Language](https://codemirror.net/mode/index.html) used in code editor |
| theme | PropTypes.string | monokai | [Theme](https://codemirror.net/theme/) used in code editor |
| useBabel | PropTypes.bool | true | Transpile ES.Next to ES5  |

### Icon
This component adds any FontAwesome icon to your presentation.

|Name|PropType|Default|Description|
|---|---|---|---|
| name | PropTypes.string.isRequired | - | Name of the [FontAwesome](https://fortawesome.github.io/Font-Awesome/icons/) icon without the `fa-` prefix |
| size | PropTypes.string | - | Size of the icon (lg, 2x, 3x, 4x, 5x) |

### GoTo
This component adds a button redirecting to any slide of your presentation.

|Name|PropType|Default|Description|
|---|---|---|---|
| slide | PropTypes.number.isRequired | - | Index of slide you want to redirect to, starts with 0 |
| type | PropTypes.string | `button` | `button` or `link` |
| children | PropTypes.node | `Go To Slide #x` | Clickable text or node |

## To-Do
- customizing themes
- synchronize opening fullscreen code editor
