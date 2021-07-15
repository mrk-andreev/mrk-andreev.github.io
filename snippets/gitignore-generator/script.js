const SNIPPETS_DICT = 'suggests.json';

const generateBacklink = (requestedSnippets) => `\n# End of https://mrkandreev.name/snippets/gitignore-generator/#${requestedSnippets.join(',')}`;

const snippetUrl = (templateName) => `snippets/${templateName}.gitignore`;

const fetchSnippets = (snippets) => {
    return Promise.all(
        snippets.map(snippet => $.ajax(snippetUrl(snippet)).done((data) => data))
    )
        .then(snippets => snippets.flatMap(snippet => snippet.split('\n')).join('\n'))
        .then(data => data + generateBacklink(snippets));
}

const fetchSnippetsList = () => new Promise(resolve => $.ajax(SNIPPETS_DICT).done((data) => resolve(data)));

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
                tokenSeparators: [',', ' ']
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
        });
    });
    document.addEventListener('keydown', function (e) {
        if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
            e.preventDefault();
            downloadAsFile();
        }
    }, false);
    $downloadBtn.click(() => downloadAsFile());
});
