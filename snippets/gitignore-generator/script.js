'use strict';

// Generated from the files in ./snippets (*.gitignore, *.patch, *.stack).
const TEMPLATES = [
    "1C", "1C-Bitrix", "A-Frame", "Actionscript", "Ada", "Adobe", "AdvancedInstaller", "AdventureGameStudio",
    "Agda", "AL", "AlteraQuartusII", "Altium", "Amplify", "Android", "AndroidStudio", "Angular",
    "Anjuta", "Ansible", "AnsibleTower", "ApacheCordova", "ApacheHadoop", "AppBuilder", "AppceleratorTitanium", "AppCode",
    "AppCode+all", "AppCode+iml", "AppEngine", "AptanaStudio", "Arcanist", "Archive", "Archives", "ArchLinuxPackages",
    "ASPNETCore", "Assembler", "ATE", "AtmelStudio", "ATS", "Audio", "AutomationStudio", "Autotools",
    "Autotools+strict", "AWR", "AzureFunctions", "Azurite", "Backup", "Ballerina", "baserCMS", "Basic",
    "Batch", "Bazaar", "Bazel", "Bitrise", "Bitrix", "BitTorrent", "Blackbox", "Bloop",
    "bluej", "Bookdown", "Bower", "BricxCC", "Buck", "C", "C++", "Cake",
    "CakePHP", "CakePHP2", "CakePHP3", "Calabash", "Carthage", "certificates", "Ceylon", "CFWheels",
    "ChefCookbook", "Chocolatey", "Clean", "CLion", "CLion+all", "CLion+iml", "Clojure", "Cloud9",
    "CMake", "CocoaPods", "Cocos2dx", "CocosCreator", "Code-Java", "CodeBlocks", "CodeComposerStudio", "CodeIgniter",
    "Codeio", "CodeKit", "CodeSniffer", "CoffeeScript", "CommonLisp", "Compodoc", "Composer", "Compressed",
    "CompressedArchive", "Compression", "Conan", "Concrete5", "Coq", "Cordova", "CraftCMS", "Crashlytics",
    "CRBasic", "Crossbar", "Crystal", "CS-Cart", "Csharp", "CUDA", "CVS", "CypressIO",
    "D", "Dart", "DartEditor", "Data", "Database", "DataRecovery", "DBeaver", "Defold",
    "Delphi", "Dframe", "Diff", "direnv", "DiskImage", "Django", "DM", "DocFx",
    "Docpress", "Docz", "dotenv", "DotfilesSh", "DotnetCore", "DotSettings", "Dreamweaver", "Dropbox",
    "Drupal", "Drupal7", "Drupal8", "e2studio", "Eagle", "easybook", "Eclipse", "EiffelStudio",
    "ElasticBeanstalk", "Elisp", "Elixir", "Elm", "Emacs", "Ember", "Ensime", "EPiServer",
    "Erlang", "Espresso", "Executable", "Exercism", "ExpressionEngine", "ExtJs", "Fancy", "fastlane",
    "Finale", "Firebase", "FlashBuilder", "Flask", "Flatpak", "Flex", "FlexBuilder", "floobits",
    "Flutter", "Font", "FontForge", "ForceDotCom", "ForgeGradle", "Fortran", "FreePascal", "fsharp",
    "FuelPHP", "FuseTools", "Games", "Gcov", "Genero4GL", "Geth", "GGTS", "GIS",
    "Git", "GitBook", "Go", "Godot", "GoodSync", "GPG", "Gradle", "Grails",
    "greenfoot", "Groovy", "grunt", "GWT", "Haskell", "Helm", "Hexo", "HOL",
    "HomeAssistant", "Homebrew", "HSP", "Hugo", "HyperledgerComposer", "IAR", "IAR_EWARM", "IAREmbeddedWorkBench",
    "IDAPro", "Idris", "IGORPro", "Images", "infer", "InforCMS", "InforCRM", "Intellij",
    "Intellij+all", "Intellij+iml", "Ionic3", "JabRef", "Java", "Java-Web", "JBoss", "JBoss-4-2-3-GA",
    "JBoss-6-x", "JBoss4", "JBoss6", "JDeveloper", "Jekyll", "JEnv", "JetBrains", "JetBrains+all",
    "JetBrains+iml", "JGiven", "Jigsaw", "JMeter", "Joe", "Joomla", "jspm", "Julia",
    "JupyterNotebooks", "JustCode", "Kate", "KDevelop4", "KDiff3", "Keil", "Kentico", "KiCad",
    "Kirby2", "Kobalt", "Kohana", "KomodoEdit", "KonyVisualizer", "Kotlin", "LabVIEW", "LabVIEWNXG",
    "LAMP", "Laravel", "LaTeX", "Lazarus", "Leiningen", "LemonStand", "Less", "LiberoSOC",
    "librarian-chef", "LibreOffice", "Lilypond", "Linux", "Lithium", "LocalStack", "Logtalk", "LSspice",
    "LTspice", "Lua", "LyX", "m2e", "macOS", "Magento", "Magento1", "Magento2",
    "Magic-xpa", "MATLAB", "Maven", "MavensMate", "MdBook", "MEAN", "Mercurial", "Mercury",
    "Meson", "Metals", "MetaProgrammingSystem", "Meteor", "MeteorJS", "MicrosoftOffice", "MikroC", "Moban",
    "ModelSim", "MODX", "Momentics", "MonoDevelop", "MPLabX", "mule", "Nanoc", "NativeScript",
    "NCrunch", "NesC", "NetBeans", "Nette", "Nikola", "Nim", "Ninja", "Node",
    "NodeChakraTimeTravelDebug", "Nohup", "NotepadPP", "nova", "now", "Nuxt", "Nuxtjs", "Nwjs",
    "Objective-C", "OCaml", "Octave", "OctoberCms", "Opa", "OpenCart", "OpenCV", "OpenFOAM",
    "OpenFrameworks", "OpenFrameworks+VisualStudio", "OracleForms", "OrCAD", "OSX", "Otto", "OxidEshop", "oXygenXMLEditor",
    "Packer", "Particle", "Patch", "PAWN", "Perl", "Perl6", "pH7CMS", "Phalcon",
    "Phoenix", "PHPCodeSniffer", "PhpStorm", "PhpStorm+all", "PhpStorm+iml", "PHPUnit", "pico8", "Pimcore",
    "Pimcore4", "Pimcore5", "PineGrow", "PlatformIO", "PlayFramework", "Plone", "Polymer", "PowerShell",
    "premake-gmake", "Prepros", "Prestashop", "Processing", "ProgressABL", "PSoCCreator", "Puppet", "puppet-librarian",
    "PureBasic", "PureScript", "PuTTY", "PVS", "PyCharm", "PyCharm+all", "PyCharm+iml", "pydev",
    "Python", "QML", "Qooxdoo", "Qt", "QtCreator", "R", "Racket", "Rails",
    "react", "ReactNative", "Reasonml", "Red", "Redcar", "Redis", "retool", "RhodesRhomobile",
    "Rider", "ROOT", "ROS", "Ruby", "RubyMine", "RubyMine+all", "RubyMine+iml", "Rust",
    "Salesforce", "SalesforceDX", "SAM", "SAS", "Sass", "SBT", "Scala", "Scheme",
    "SCons", "Scrivener", "Sdcc", "SeamGen", "SenchaTouch", "Serverless", "Shopware", "Silverstripe",
    "SketchUp", "SlickEdit", "Smalltalk", "Snap", "Snapcraft", "Solidity", "SolidityTruffle", "Sonar",
    "SonarQube", "SourcePawn", "Spark", "Splunk", "Spreadsheet", "SSH", "StandardML", "Stata",
    "StdLib", "Stella", "Stellar", "StorybookJs", "Strapi", "Stylus", "SublimeText", "SugarCRM",
    "SVN", "Swift", "SwiftPackageManager", "SwiftPM", "Symfony", "SymphonyCMS", "Synology", "SynopsysVCS",
    "Tags", "TarmaInstallMate", "Terraform", "Terragrunt", "Test", "TestComplete", "Testinfra", "TeX",
    "Text", "TextMate", "Textpattern", "THEOS-Tweak", "ThinkPHP", "TLA+", "TortoiseGit", "Tower",
    "TurboGears2", "TwinCAT3", "Tye", "Typings", "Typo3", "TYPO3-composer", "Umbraco", "Unity",
    "UnrealEngine", "Vaadin", "Vagrant", "Valgrind", "Vapor", "venv", "Vertx", "Video",
    "Vim", "VirtualEnv", "Virtuoso", "VisualStudio", "VisualStudioCode", "Vivado", "VLab", "vs",
    "Vue", "Vuejs", "VVVV", "Waf", "Wakanda", "Web", "WebMethods", "WebStorm",
    "WebStorm+all", "WebStorm+iml", "WerckerCLI", "Windows", "Wintersmith", "WordPress", "Wyam", "XamarinStudio",
    "Xcode", "XcodeInjection", "Xilinx", "XilinxISE", "XilinxVivado", "Xill", "Xojo", "XText",
    "Y86", "yarn", "Yeoman", "Yii", "Yii2", "ZendFramework", "Zephir", "zig",
    "Zsh", "ZukenCR8000"
];

// Templates that have an extra <name>.patch file appended after the base template.
const PATCHES = new Set([
    "Android", "AndroidStudio", "AppCode", "AppCode+all", "AppCode+iml", "Autotools", "Autotools+strict", "CLion",
    "CLion+all", "CLion+iml", "CMake", "CodeIgniter", "CodeKit", "D", "Eclipse", "Elixir",
    "Firebase", "Go", "Gradle", "Intellij", "Intellij+all", "Intellij+iml", "JetBrains", "JetBrains+all",
    "JetBrains+iml", "KiCad", "LaTeX", "Magento", "Objective-C", "OpenFrameworks+VisualStudio", "Packer", "PhpStorm",
    "PhpStorm+all", "PhpStorm+iml", "PyCharm", "PyCharm+all", "PyCharm+iml", "RubyMine", "RubyMine+all", "RubyMine+iml",
    "SalesforceDX", "Symfony", "TeX", "UnrealEngine", "Vagrant", "Vapor", "VisualStudio", "VisualStudioCode",
    "WebStorm", "WebStorm+all", "WebStorm+iml", "Xcode"
]);

// Stack templates: <name>.<Other>.stack files appended after the base template.
const STACKS = {
    "Django": ["Django.Python"],
    "Flask": ["Flask.Python"],
    "LAMP": ["LAMP.Linux", "LAMP.PHP"],
    "MEAN": ["MEAN.Anglar", "MEAN.Node"],
    "R": ["R.Bookdown"],
    "ReactNative": ["ReactNative.Android", "ReactNative.Buck", "ReactNative.Gradle", "ReactNative.Linux", "ReactNative.Node", "ReactNative.Xcode", "ReactNative.macOS"],
    "TwinCAT3": ["TwinCAT3.OpenFrameworks", "TwinCAT3.VisualStudio"]
};

// Templates that must keep a fixed relative order when selected together (mirrors ./snippets/order):
// e.g. Java ignores *.jar, Gradle/AndroidStudio then re-include gradle-wrapper.jar.
const ORDER = ['java', 'gradle', 'androidstudio', 'visualstudio', 'umbraco'];

const POPULAR = [
    'macOS', 'Windows', 'Linux', 'VisualStudioCode', 'JetBrains+all',
    'Python', 'Node', 'Java', 'Go', 'Rust', 'Gradle', 'Maven', 'Terraform'
];

// Search-only aliases: what people type -> template name.
const ALIASES = {
    vscode: 'VisualStudioCode', idea: 'Intellij',
    nodejs: 'Node', npm: 'Node', javascript: 'Node', js: 'Node', typescript: 'Node', ts: 'Node',
    golang: 'Go', 'c#': 'Csharp', dotnet: 'DotnetCore', cpp: 'C++', mac: 'macOS', osx: 'macOS',
    jupyter: 'JupyterNotebooks', ipynb: 'JupyterNotebooks', sublime: 'SublimeText', tf: 'Terraform',
    reactjs: 'react', env: 'dotenv'
};

const SITE_URL = 'https://mrkandreev.name/snippets/gitignore-generator/';
const MAX_SUGGESTIONS = 80;

const norm = s => s.toLowerCase().replace(/[^a-z0-9+#]/g, '');
const BY_KEY = new Map(TEMPLATES.map(name => [norm(name), name]));
const resolveName = raw => BY_KEY.get(norm(raw)) || null;

/* ---------- data ---------- */

const textCache = new Map();
const fetchText = file => {
    if (!textCache.has(file)) {
        const p = fetch('snippets/' + encodeURIComponent(file))
            .then(r => {
                if (!r.ok) throw new Error(`${file}: HTTP ${r.status}`);
                return r.text();
            });
        p.catch(() => textCache.delete(file)); // allow retry after a network error
        textCache.set(file, p);
    }
    return textCache.get(file);
};

const sectionsFor = name => [
    {title: name, file: `${name}.gitignore`},
    ...(PATCHES.has(name) ? [{title: `${name} Patch`, file: `${name}.patch`}] : []),
    ...(STACKS[name] || []).map(stack => ({title: `${stack} Stack`, file: `${stack}.stack`}))
];

// Keep the user's order, but make templates listed in ORDER appear in that relative order.
const applyOrder = names => {
    const rank = n => ORDER.indexOf(n.toLowerCase());
    const slots = [];
    const ranked = [];
    names.forEach((n, i) => {
        if (rank(n) >= 0) {
            slots.push(i);
            ranked.push(n);
        }
    });
    ranked.sort((a, b) => rank(a) - rank(b));
    const out = names.slice();
    slots.forEach((slot, i) => (out[slot] = ranked[i]));
    return out;
};

const shareUrl = names => SITE_URL + (names.length ? '#' + names.join(',') : '');

// Drops repeated patterns. A repeat is kept if a negation (!pattern) appeared since the first
// occurrence, because then the repeat may intentionally re-ignore something.
const dedupeLines = lines => {
    const seenAt = new Map();
    let negations = 0;
    let removed = 0;
    const out = [];
    for (const line of lines) {
        const t = line.trim();
        if (t === '' || t.startsWith('#')) {
            out.push(line);
            continue;
        }
        if (t.startsWith('!')) {
            negations++;
            out.push(line);
            continue;
        }
        if (seenAt.has(t) && seenAt.get(t) === negations) {
            removed++;
            continue;
        }
        seenAt.set(t, negations);
        out.push(line);
    }
    return {lines: out, removed};
};

const buildGitignore = async (names, dedupe) => {
    const ordered = applyOrder(names);
    const sections = ordered.flatMap(sectionsFor);
    const texts = await Promise.all(sections.map(s => fetchText(s.file)));
    const link = shareUrl(ordered);

    let lines = [];
    sections.forEach((s, i) => {
        const body = texts[i].replace(/\r\n?/g, '\n').replace(/^\s*\n/, '').replace(/\s+$/, '');
        lines.push(`### ${s.title} ###`, ...body.split('\n'), '');
    });

    let removed = 0;
    if (dedupe) {
        ({lines, removed} = dedupeLines(lines));
        lines = lines.filter((l, i) => !(l.trim() === '' && (lines[i - 1] || '').trim() === '')); // collapse blank runs
    }

    const text = [`# Created by ${link}`, `# Edit at ${link}`, '', ...lines, `# End of ${link}`, ''].join('\n');
    return {text, removed, ordered};
};

/* ---------- clipboard / download ---------- */

const copyText = async text => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        let ok = false;
        try {
            ok = document.execCommand('copy');
        } catch (ignored) {
        }
        ta.remove();
        return ok;
    }
};

const downloadText = (text, filename) => {
    const url = URL.createObjectURL(new Blob([text], {type: 'application/octet-stream'}));
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};

/* ---------- UI ---------- */

const escapeHtml = s => s.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

const highlight = text => text.split('\n').map(line => {
    const e = escapeHtml(line);
    if (/^### .* ###$/.test(line)) return `<span class="tok-section">${e}</span>`;
    if (/^\s*#/.test(line)) return `<span class="tok-comment">${e}</span>`;
    if (/^\s*!/.test(line)) return `<span class="tok-negate">${e}</span>`;
    return e;
}).join('\n');

document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);
    const field = $('gi-field');
    const chips = $('gi-chips');
    const input = $('gi-input');
    const list = $('gi-list');
    const clearBtn = $('gi-clear');
    const popular = $('gi-popular');
    const stats = $('gi-stats');
    const output = $('gi-output');
    const code = $('gi-code');
    const empty = $('gi-empty');
    const dedupeBox = $('gi-dedupe');
    const copyBtn = $('gi-copy');
    const downloadBtn = $('gi-download');
    const linkBtn = $('gi-link');
    const status = $('gi-status');

    let selected = [];   // canonical template names, in user order
    let unknown = [];    // names from the URL that don't match any template
    let currentText = '';
    let activeIndex = -1;
    let suggestions = [];
    let buildToken = 0;

    try {
        dedupeBox.checked = localStorage.getItem('gi-dedupe') === '1';
    } catch (e) {
    }

    /* --- status messages --- */
    let statusTimer;
    const flash = (msg, kind = 'ok') => {
        status.textContent = msg;
        status.className = `gi-status gi-status--${kind} is-visible`;
        clearTimeout(statusTimer);
        statusTimer = setTimeout(() => status.classList.remove('is-visible'), 2200);
    };

    /* --- URL hash <-> state --- */
    const readHash = () => {
        let raw = location.hash.slice(1);
        try {
            raw = decodeURIComponent(raw);
        } catch (e) {
        }
        const names = [];
        const missing = [];
        raw.split(/[,\s]+/).filter(Boolean).forEach(token => {
            const name = resolveName(token);
            if (name) {
                if (!names.includes(name)) names.push(name);
            } else if (!missing.includes(token)) {
                missing.push(token);
            }
        });
        return {names, missing};
    };

    const writeHash = () => {
        const hash = selected.length ? '#' + selected.join(',') : '';
        if (location.hash !== hash) {
            history.replaceState(null, '', location.pathname + location.search + hash);
        }
    };

    /* --- rendering --- */
    const renderChips = () => {
        const chip = (name, bad) =>
            `<li class="gi-chip${bad ? ' gi-chip--bad' : ''}"${bad ? ' title="No template with this name"' : ''}>` +
            `<span>${escapeHtml(name)}</span>` +
            `<button type="button" class="gi-chip__x" data-remove="${escapeHtml(name)}" data-bad="${bad ? 1 : 0}" ` +
            `aria-label="Remove ${escapeHtml(name)}">&times;</button></li>`;
        chips.innerHTML = selected.map(n => chip(n, false)).join('') + unknown.map(n => chip(n, true)).join('');
        clearBtn.hidden = selected.length + unknown.length === 0;
        input.placeholder = selected.length ? 'Add more…' : 'Search OS, IDEs, languages, tools… (e.g. macos, vscode, python)';
        popular.querySelectorAll('[data-name]').forEach(b => {
            const on = selected.includes(b.dataset.name);
            b.classList.toggle('is-on', on);
            b.setAttribute('aria-pressed', String(on));
        });
    };

    const renderEmpty = () => {
        currentText = '';
        output.innerHTML = '';
        code.hidden = true;
        empty.hidden = false;
        stats.textContent = '';
        [copyBtn, downloadBtn, linkBtn].forEach(b => (b.disabled = true));
    };

    const regenerate = async () => {
        const token = ++buildToken;
        if (!selected.length) {
            renderEmpty();
            return;
        }
        code.classList.add('is-loading');
        try {
            const {text, removed, ordered} = await buildGitignore(selected, dedupeBox.checked);
            if (token !== buildToken) return; // a newer build started meanwhile
            currentText = text;
            output.innerHTML = highlight(text);
            code.hidden = false;
            empty.hidden = true;
            const lines = text.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length;
            const reordered = ordered.join() !== selected.join();
            stats.textContent = `${selected.length} template${selected.length > 1 ? 's' : ''} · ${lines} rules` +
                (removed ? ` · ${removed} duplicates removed` : '') +
                (reordered ? ' · reordered so negations work' : '');
            [copyBtn, downloadBtn, linkBtn].forEach(b => (b.disabled = false));
        } catch (e) {
            if (token !== buildToken) return;
            flash(`Could not load templates (${e.message}). Check your connection and try again.`, 'error');
        } finally {
            if (token === buildToken) code.classList.remove('is-loading');
        }
    };

    const commit = () => {
        writeHash();
        renderChips();
        renderList();
        regenerate();
    };

    const add = name => {
        if (name && !selected.includes(name)) selected.push(name);
    };

    const toggle = name => {
        if (selected.includes(name)) selected = selected.filter(n => n !== name);
        else add(name);
        commit();
    };

    /* --- suggestions --- */
    const search = q => {
        const key = norm(q);
        if (!key) return TEMPLATES.slice();
        const aliasHit = ALIASES[key];
        const scored = [];
        for (const name of TEMPLATES) {
            const n = norm(name);
            const pos = n.indexOf(key);
            if (pos < 0 && name !== aliasHit) continue;
            const score = name === aliasHit ? -1 : n === key ? 0 : pos === 0 ? 1 : 2;
            scored.push([score, n.length, name]);
        }
        scored.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2].localeCompare(b[2]));
        return scored.map(s => s[2]);
    };

    const markMatch = (name, q) => {
        const key = q.trim().toLowerCase();
        const i = key ? name.toLowerCase().indexOf(key) : -1;
        if (i < 0) return escapeHtml(name);
        return escapeHtml(name.slice(0, i)) + '<mark>' + escapeHtml(name.slice(i, i + key.length)) + '</mark>' +
            escapeHtml(name.slice(i + key.length));
    };

    const setActive = i => {
        activeIndex = i;
        list.querySelectorAll('[role=option]').forEach((el, j) => el.classList.toggle('is-active', j === i));
        const el = list.children[i];
        if (el && el.getAttribute('role') === 'option') {
            input.setAttribute('aria-activedescendant', el.id);
            el.scrollIntoView({block: 'nearest'});
        } else {
            input.removeAttribute('aria-activedescendant');
        }
    };

    const renderList = () => {
        if (list.hidden) return;
        const q = input.value.split(',').pop();
        const all = search(q);
        suggestions = all.slice(0, MAX_SUGGESTIONS);
        if (!suggestions.length) {
            list.innerHTML = `<li class="gi-list__note">No template matches “${escapeHtml(q.trim())}”</li>`;
        } else {
            list.innerHTML = suggestions.map((name, i) => {
                const on = selected.includes(name);
                return `<li role="option" id="gi-opt-${i}" data-index="${i}" aria-selected="${on}" class="${on ? 'is-selected' : ''}">` +
                    `<span class="gi-check" aria-hidden="true">${on ? '✓' : ''}</span>${markMatch(name, q)}</li>`;
            }).join('') + (all.length > suggestions.length
                ? `<li class="gi-list__note">${all.length - suggestions.length} more — keep typing to narrow down</li>` : '');
        }
        setActive(q.trim() && suggestions.length ? Math.min(Math.max(activeIndex, 0), suggestions.length - 1) : -1);
    };

    const openList = () => {
        if (!list.hidden) return;
        list.hidden = false;
        input.setAttribute('aria-expanded', 'true');
        activeIndex = -1;
        renderList();
    };

    const closeList = () => {
        list.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        input.removeAttribute('aria-activedescendant');
        activeIndex = -1;
    };

    // Turn comma-separated text (typed or pasted) into selections; leaves unresolved text in the box.
    const consumeTokens = (text, final) => {
        const parts = text.split(',');
        const rest = final ? [] : [parts.pop()];
        const bad = [];
        let changed = false;
        for (const p of parts) {
            if (!p.trim()) continue;
            const name = resolveName(p) || resolveName(ALIASES[norm(p)] || '');
            if (name) {
                if (!selected.includes(name)) {
                    add(name);
                    changed = true;
                }
            } else bad.push(p.trim());
        }
        input.value = [...bad, ...rest].join(', ').replace(/^, /, '');
        if (bad.length) flash(`Unknown template: ${bad.join(', ')}`, 'error');
        if (changed) commit();
        return changed;
    };

    input.addEventListener('focus', openList);
    input.addEventListener('click', openList);
    input.addEventListener('input', () => {
        openList();
        if (input.value.includes(',')) consumeTokens(input.value, false);
        activeIndex = 0;
        renderList();
    });

    input.addEventListener('keydown', e => {
        const n = suggestions.length;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                openList();
                if (n) setActive((activeIndex + 1) % n);
                break;
            case 'ArrowUp':
                e.preventDefault();
                openList();
                if (n) setActive((activeIndex - 1 + n) % n);
                break;
            case 'Enter':
                e.preventDefault();
                if (!list.hidden && activeIndex >= 0 && suggestions[activeIndex]) {
                    const name = suggestions[activeIndex];
                    input.value = '';
                    toggle(name);
                } else if (input.value.trim()) {
                    consumeTokens(input.value, true);
                }
                break;
            case 'Escape':
                if (!list.hidden) {
                    e.preventDefault();
                    closeList();
                } else if (input.value) {
                    input.value = '';
                }
                break;
            case 'Backspace':
                if (!input.value && (unknown.length || selected.length)) {
                    if (unknown.length) unknown.pop();
                    else selected.pop();
                    commit();
                }
                break;
            case 'Tab':
                closeList();
                break;
        }
    });

    list.addEventListener('mousedown', e => e.preventDefault()); // keep focus in the input
    list.addEventListener('click', e => {
        const li = e.target.closest('[role=option]');
        if (!li) return;
        input.value = '';
        toggle(suggestions[+li.dataset.index]);
    });
    list.addEventListener('mousemove', e => {
        const li = e.target.closest('[role=option]');
        if (li && +li.dataset.index !== activeIndex) setActive(+li.dataset.index);
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.gi-picker')) closeList();
    });
    field.addEventListener('click', e => {
        if (e.target === field || e.target === chips) input.focus();
    });

    chips.addEventListener('click', e => {
        const b = e.target.closest('[data-remove]');
        if (!b) return;
        const name = b.dataset.remove;
        if (b.dataset.bad === '1') unknown = unknown.filter(n => n !== name);
        else selected = selected.filter(n => n !== name);
        commit();
        input.focus();
    });

    clearBtn.addEventListener('click', () => {
        selected = [];
        unknown = [];
        input.value = '';
        commit();
        input.focus();
    });

    popular.innerHTML = '<span class="gi-popular__label">Popular:</span>' + POPULAR.filter(n => TEMPLATES.includes(n))
        .map(n => `<button type="button" class="gi-pill" data-name="${escapeHtml(n)}" aria-pressed="false">${escapeHtml(n)}</button>`)
        .join('');
    popular.addEventListener('click', e => {
        const b = e.target.closest('[data-name]');
        if (b) toggle(b.dataset.name);
    });

    dedupeBox.addEventListener('change', () => {
        try {
            localStorage.setItem('gi-dedupe', dedupeBox.checked ? '1' : '0');
        } catch (e) {
        }
        regenerate();
    });

    /* --- actions --- */
    const doDownload = () => {
        if (!currentText) {
            flash('Pick at least one template first', 'error');
            return;
        }
        downloadText(currentText, '.gitignore');
        flash('Downloaded. Some browsers drop the leading dot, so rename the file to .gitignore if needed');
    };

    copyBtn.addEventListener('click', async () => {
        flash(await copyText(currentText) ? 'Copied to clipboard' : 'Copy failed — select the text and copy manually',
            currentText ? 'ok' : 'error');
    });
    linkBtn.addEventListener('click', async () => {
        flash(await copyText(shareUrl(selected)) ? 'Link copied — it reopens this exact selection' : 'Copy failed', 'ok');
    });
    downloadBtn.addEventListener('click', doDownload);

    document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 's') {
            e.preventDefault();
            doDownload();
        }
    });

    const loadFromHash = () => {
        const {names, missing} = readHash();
        selected = names;
        unknown = missing;
        commit();
    };
    window.addEventListener('hashchange', loadFromHash);
    loadFromHash();
});
