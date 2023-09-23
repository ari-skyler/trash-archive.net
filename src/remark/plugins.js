import remarkDirective from 'remark-directive'
import {visit} from 'unist-util-visit'

const myDirective = () => {
    return (tree) => {
        visit(tree, (node) => {
            if (
            node.type === 'textDirective' ||
            node.type === 'leafDirective' ||
            node.type === 'containerDirective'
            ) {
            node.data = {
                hName: node.name,
                hProperties: node.attributes,
                ...node.data
                };
                return node;
            }
        })
        }
}

export default [remarkDirective, myDirective]