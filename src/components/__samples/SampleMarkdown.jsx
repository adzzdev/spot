import React from 'react'
import Markdown from 'markdown-to-jsx';

const MD_TEXT = `# This is Markdown\n#### You can edit me!\n[Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way.\n* You can have lists, like this one\n* Make things **bold** or *italic*\n* Embed snippets of \`code\`\n* Create [links](/)\n* ...\n<small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) ❤️</small>\nYou can even include custom React components if you declare them in the "overrides" option.`

export function SampleMarkdown_2(props){

    return(
        <>
            <Markdown children={props.content} options={props.options}/>
        </>
    )
}
