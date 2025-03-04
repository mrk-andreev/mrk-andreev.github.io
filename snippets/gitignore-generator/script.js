const generateBacklink = (requestedSnippets) => `\n# End of https://mrkandreev.name/snippets/gitignore-generator/#${requestedSnippets.join(',')}`;

const snippetUrl = (templateName) => `snippets/${templateName}.gitignore`;

const fetchSnippets = (snippets) => {
    return Promise.all(
        snippets.map(snippet => fetch(snippetUrl(snippet)).then(r => r.ok ? r.text() : new Promise(resolve => resolve(''))))
    )
        .then(snippets => snippets.flatMap(snippet => snippet.split('\n')).join('\n'))
        .then(data => data + generateBacklink(snippets));
}

const SNIPPETS = [
    "C",
    "R",
    "D",
    "1C",
    "vs",
    "Qt",
    "Go",
    "DM",
    "AL",
    "Tye",
    "Yii",
    "OSX",
    "Opa",
    "TeX",
    "SVN",
    "now",
    "Elm",
    "PVS",
    "SSH",
    "Y86",
    "GIS",
    "Git",
    "Coq",
    "GPG",
    "GWT",
    "Vim",
    "QML",
    "HOL",
    "Ada",
    "zig",
    "HSP",
    "Web",
    "m2e",
    "ATE",
    "Waf",
    "ATS",
    "LyX",
    "IAR",
    "Lua",
    "Vue",
    "AWR",
    "CVS",
    "Red",
    "C++",
    "Zsh",
    "SBT",
    "SAS",
    "ROS",
    "SAM",
    "Joe",
    "Nim",
    "Kate",
    "jspm",
    "Ruby",
    "Rust",
    "Keil",
    "ROOT",
    "JEnv",
    "Sass",
    "LAMP",
    "Buck",
    "VLab",
    "Less",
    "Cake",
    "Java",
    "Sdcc",
    "Hugo",
    "MEAN",
    "MODX",
    "Hexo",
    "Helm",
    "Wyam",
    "mule",
    "Snap",
    "NesC",
    "Xill",
    "venv",
    "Xojo",
    "Node",
    "GGTS",
    "Geth",
    "Gcov",
    "yarn",
    "Font",
    "Flex",
    "nova",
    "Nuxt",
    "Docz",
    "Nwjs",
    "Tags",
    "Diff",
    "Agda",
    "Test",
    "Data",
    "Yii2",
    "Dart",
    "TLA+",
    "Otto",
    "Text",
    "PAWN",
    "Perl",
    "CUDA",
    "VVVV",
    "Nohup",
    "pico8",
    "Bloop",
    "Perl6",
    "Adobe",
    "bluej",
    "Patch",
    "Bower",
    "Julia",
    "Conan",
    "Tower",
    "Scala",
    "OrCAD",
    "Plone",
    "Bazel",
    "JBoss",
    "KiCad",
    "infer",
    "SCons",
    "Batch",
    "Typo3",
    "Basic",
    "OCaml",
    "DocFx",
    "PuTTY",
    "Idris",
    "LaTeX",
    "Redis",
    "Linux",
    "Video",
    "Swift",
    "Meson",
    "grunt",
    "XText",
    "Ninja",
    "Clean",
    "Eagle",
    "Nette",
    "Rider",
    "pydev",
    "Nanoc",
    "Elisp",
    "react",
    "Unity",
    "Emacs",
    "Ember",
    "Godot",
    "Vertx",
    "Vuejs",
    "Xcode",
    "Audio",
    "CMake",
    "Vapor",
    "ExtJs",
    "Fancy",
    "Moban",
    "macOS",
    "Rails",
    "Games",
    "Flask",
    "Sonar",
    "Spark",
    "Maven",
    "Stata",
    "CLion",
    "JBoss6",
    "MdBook",
    "Metals",
    "Racket",
    "Splunk",
    "StdLib",
    "Vaadin",
    "fsharp",
    "MATLAB",
    "Meteor",
    "Stella",
    "MikroC",
    "Finale",
    "Python",
    "MPLabX",
    "Strapi",
    "Erlang",
    "Stylus",
    "Ensime",
    "Elixir",
    "Xilinx",
    "Gradle",
    "Grails",
    "Nikola",
    "Groovy",
    "Drupal",
    "Anjuta",
    "Yeoman",
    "Redcar",
    "Ceylon",
    "Backup",
    "Nuxtjs",
    "retool",
    "dotenv",
    "Codeio",
    "Kotlin",
    "Django",
    "direnv",
    "Kohana",
    "IDAPro",
    "Octave",
    "Kobalt",
    "Images",
    "Dframe",
    "Kirby2",
    "Delphi",
    "Bazaar",
    "Defold",
    "Scheme",
    "Ionic3",
    "JabRef",
    "KDiff3",
    "Puppet",
    "OpenCV",
    "Altium",
    "Zephir",
    "JBoss4",
    "Bitrix",
    "Packer",
    "Jekyll",
    "Joomla",
    "Csharp",
    "pH7CMS",
    "Vivado",
    "JGiven",
    "Jigsaw",
    "JMeter",
    "Cloud9",
    "Azurite",
    "CRBasic",
    "PHPUnit",
    "BricxCC",
    "Pimcore",
    "Phoenix",
    "Bitrise",
    "Phalcon",
    "CakePHP",
    "Crystal",
    "Kentico",
    "A-Frame",
    "CS-Cart",
    "IGORPro",
    "Cordova",
    "Polymer",
    "Prepros",
    "SeamGen",
    "Amplify",
    "DBeaver",
    "Laravel",
    "Typings",
    "Lazarus",
    "LabVIEW",
    "Android",
    "Symfony",
    "Angular",
    "Qooxdoo",
    "SwiftPM",
    "Ansible",
    "Haskell",
    "Lithium",
    "Dropbox",
    "Logtalk",
    "CodeKit",
    "LTspice",
    "GitBook",
    "Clojure",
    "Wakanda",
    "PyCharm",
    "Magento",
    "Drupal7",
    "Drupal8",
    "AppCode",
    "FuelPHP",
    "Fortran",
    "Eclipse",
    "Vagrant",
    "NCrunch",
    "Umbraco",
    "Mercury",
    "Flutter",
    "Stellar",
    "Archive",
    "Flatpak",
    "Windows",
    "LSspice",
    "Blackbox",
    "Firebase",
    "fastlane",
    "ModelSim",
    "Arcanist",
    "MeteorJS",
    "floobits",
    "Exercism",
    "Espresso",
    "SugarCRM",
    "Archives",
    "WebStorm",
    "Valgrind",
    "NetBeans",
    "easybook",
    "Cocos2dx",
    "Magento2",
    "Magento1",
    "Solidity",
    "GoodSync",
    "Lilypond",
    "Reasonml",
    "CFWheels",
    "Virtuoso",
    "Synology",
    "SketchUp",
    "Docpress",
    "Homebrew",
    "Carthage",
    "baserCMS",
    "Calabash",
    "OpenCart",
    "Compodoc",
    "OpenFOAM",
    "Shopware",
    "CakePHP3",
    "Database",
    "Composer",
    "TwinCAT3",
    "ThinkPHP",
    "PineGrow",
    "Pimcore5",
    "CakePHP2",
    "Particle",
    "CraftCMS",
    "InforCMS",
    "InforCRM",
    "Intellij",
    "Crossbar",
    "Java-Web",
    "JustCode",
    "Pimcore4",
    "PhpStorm",
    "RubyMine",
    "Bookdown",
    "TextMate",
    "e2studio",
    "Genero4GL",
    "1C-Bitrix",
    "Snapcraft",
    "XilinxISE",
    "OxidEshop",
    "greenfoot",
    "AppEngine",
    "WordPress",
    "Smalltalk",
    "SlickEdit",
    "FuseTools",
    "SonarQube",
    "IAR_EWARM",
    "Scrivener",
    "Assembler",
    "FontForge",
    "Ballerina",
    "PureBasic",
    "EPiServer",
    "JBoss-6-x",
    "NotepadPP",
    "JetBrains",
    "DiskImage",
    "CLion+all",
    "CLion+iml",
    "CocoaPods",
    "Momentics",
    "Code-Java",
    "Terraform",
    "QtCreator",
    "Mercurial",
    "Testinfra",
    "Magic-xpa",
    "KDevelop4",
    "CypressIO",
    "Leiningen",
    "Concrete5",
    "LiberoSOC",
    "Autotools",
    "LemonStand",
    "Compressed",
    "CommonLisp",
    "LabVIEWNXG",
    "DartEditor",
    "KomodoEdit",
    "LocalStack",
    "MavensMate",
    "Terragrunt",
    "CodeBlocks",
    "Chocolatey",
    "Salesforce",
    "DotfilesSh",
    "DotnetCore",
    "VirtualEnv",
    "JDeveloper",
    "BitTorrent",
    "PureScript",
    "Executable",
    "OctoberCms",
    "Processing",
    "StandardML",
    "Prestashop",
    "FreePascal",
    "Serverless",
    "SourcePawn",
    "ASPNETCore",
    "WebMethods",
    "PowerShell",
    "WerckerCLI",
    "PlatformIO",
    "AppBuilder",
    "StorybookJs",
    "THEOS-Tweak",
    "ProgressABL",
    "AtmelStudio",
    "PSoCCreator",
    "SenchaTouch",
    "ForgeGradle",
    "Spreadsheet",
    "ForceDotCom",
    "Wintersmith",
    "OracleForms",
    "FlexBuilder",
    "Objective-C",
    "PyCharm+all",
    "ZukenCR8000",
    "PyCharm+iml",
    "MonoDevelop",
    "SublimeText",
    "AppCode+iml",
    "AppCode+all",
    "Dreamweaver",
    "CodeIgniter",
    "DotSettings",
    "CodeSniffer",
    "SymphonyCMS",
    "ReactNative",
    "SynopsysVCS",
    "LibreOffice",
    "TurboGears2",
    "TortoiseGit",
    "Compression",
    "Textpattern",
    "Crashlytics",
    "ApacheHadoop",
    "CocosCreator",
    "UnrealEngine",
    "TestComplete",
    "DataRecovery",
    "PhpStorm+iml",
    "WebStorm+iml",
    "RubyMine+all",
    "RubyMine+iml",
    "XilinxVivado",
    "Actionscript",
    "AptanaStudio",
    "SalesforceDX",
    "CoffeeScript",
    "Intellij+all",
    "FlashBuilder",
    "AnsibleTower",
    "EiffelStudio",
    "PhpStorm+all",
    "VisualStudio",
    "certificates",
    "WebStorm+all",
    "Silverstripe",
    "NativeScript",
    "Intellij+iml",
    "ChefCookbook",
    "ZendFramework",
    "XamarinStudio",
    "AndroidStudio",
    "HomeAssistant",
    "PlayFramework",
    "premake-gmake",
    "JetBrains+all",
    "JetBrains+iml",
    "ApacheCordova",
    "PHPCodeSniffer",
    "AzureFunctions",
    "JBoss-4-2-3-GA",
    "XcodeInjection",
    "OpenFrameworks",
    "TYPO3-composer",
    "librarian-chef",
    "KonyVisualizer",
    "MicrosoftOffice",
    "AlteraQuartusII",
    "SolidityTruffle",
    "oXygenXMLEditor",
    "RhodesRhomobile",
    "AutomationStudio",
    "Autotools+strict",
    "puppet-librarian",
    "VisualStudioCode",
    "ExpressionEngine",
    "ElasticBeanstalk",
    "JupyterNotebooks",
    "TarmaInstallMate",
    "ArchLinuxPackages",
    "AdvancedInstaller",
    "CompressedArchive",
    "CodeComposerStudio",
    "SwiftPackageManager",
    "AdventureGameStudio",
    "HyperledgerComposer",
    "IAREmbeddedWorkBench",
    "AppceleratorTitanium",
    "MetaProgrammingSystem",
    "NodeChakraTimeTravelDebug",
    "OpenFrameworks+VisualStudio"
];

const fetchSnippetsList = () => new Promise(resolve => resolve(SNIPPETS));

$(document).ready(() => {
    const $searchInput = $('#search-box');
    const $createBtn = $('#create');
    const $copyBtn = $('#copy');
    const $downloadBtn = $('#download');
    const $output = $('#output');

    const disableInputs = () => {
        $searchInput.prop('disabled', true);
        $createBtn.prop('disabled', true);
    };

    const enableInputs = () => {
        $searchInput.prop('disabled', false);
        $createBtn.prop('disabled', false);
    };

    const fetchInitialSnippets = () => {
        if (location.hash.length > 0) {
            const requestedSnippets = location.hash.substring(1, location.hash.length).split(',');
            $searchInput.val(requestedSnippets);
            $searchInput.trigger('change');
            fetchSnippets(requestedSnippets).then(data => $output.text(data));
        }
    };

    const downloadAsFile = () => {
        const file = new Blob([$output.text()]);
        const domLink = document.createElement('a');
        const url = URL.createObjectURL(file);
        domLink.href = url;
        domLink.download = '.gitignore';
        document.body.appendChild(domLink);
        domLink.click();
        setTimeout(function () {
            document.body.removeChild(domLink);
            window.URL.revokeObjectURL(url);
        }, 0)
    };

    fetchSnippetsList()
        .then(data => {
            $searchInput.select2({
                data: data,
                allowClear: true,
                multiple: true,
                tags: true,
                tokenSeparators: [',', ' '],
                placeholder: '',
            });
            // hotfix for select2 error 'Cannot read property 'id' of undefined'
            setTimeout(() => $('.select2-selection__clear').click(e => {
                $searchInput.val(null);
                $searchInput.trigger('change');
            }), 0);

            fetchInitialSnippets();
        });

    $createBtn.click(() => {
        const requestedSnippets = $searchInput.select2('data').map(el => el.id);
        location.hash = requestedSnippets.join(',')
        if (requestedSnippets.length > 0) {
            disableInputs();
            fetchSnippets(requestedSnippets)
                .then(data => $output.text(data))
                .finally(() => enableInputs());
        } else {
            $output.text('');
        }
    });
    $copyBtn.click(() => {
        navigator.permissions.query({name: 'clipboard-write'}).then(result => {
            if (result.state === 'granted' || result.state === 'prompt') {
                navigator.clipboard.writeText($output.text());
            } else {
                alert('Can not copy data to clipboard');
            }
        }).catch(err => alert(`Can not copy data to clipboard because "${JSON.stringify(err)}"`));
    });
    document.addEventListener('keydown', function (e) {
        if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
            e.preventDefault();
            downloadAsFile();
        }
    }, false);
    $downloadBtn.click(() => downloadAsFile());
});
