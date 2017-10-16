// This file is a part of quicksave project.
// Copyright (c) 2017 Aleksander Gajewski <adiog@quicksave.io>.

chrome.contextMenus.create(
    {
        'title': 'quicksave page',
        'contexts': ['page'],
        'onclick': context_menu_page_callback
    }
);

chrome.contextMenus.create(
    {
        'title': 'quicksave link',
        'contexts': ['link'],
        'onclick': context_menu_link_callback
    }
);

chrome.contextMenus.create(
    {
        'title': 'quicksave selection',
        'contexts': ['selection'],
        'onclick': context_menu_selection_callback
    }
);

chrome.contextMenus.create(
    {
        'title': 'quicksave image',
        'contexts': ['image'],
        'onclick': context_menu_image_callback
    }
);

chrome.contextMenus.create(
    {
        'title': 'quicksave audio',
        'contexts': ['audio'],
        'onclick': context_menu_audio_callback
    }
);

chrome.contextMenus.create(
    {
        'title': 'quicksave video',
        'contexts': ['video'],
        'onclick': context_menu_video_callback
    }
);

chrome.browserAction.onClicked.addListener(toolbar_button_callback);