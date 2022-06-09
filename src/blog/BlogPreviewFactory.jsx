import React from 'react'
import FullBlogPreview from './components/FullBlogPreview'
import PartialBlogPreview from './components/PartialBlogPeview'

export default function BlogPreviewFactory({component, data}) {
    
    if(component.type === FullBlogPreview){
        return <FullBlogPreview data={data} />
    }else if(component.type === PartialBlogPreview){
        return <PartialBlogPreview data={data} />
    }
}
