// This file is a part of quicksave project.
// Copyright (c) 2017 Aleksander Gajewski <adiog@quicksave.io>.

function do_log(o)
{
    if (window.chrome && chrome.runtime && chrome.runtime.id)
    {
        chrome.extension.getBackgroundPage().console.log(o);
    }
    else
    {
        console.log(o);
    }
}

function log()
{
    for(let i = 0; i < arguments.length; i++)
    {
        do_log(arguments[i]);
    }
}
