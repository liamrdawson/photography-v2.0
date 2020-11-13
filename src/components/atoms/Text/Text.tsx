/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css} from '@emotion/core'
import { ITheme } from '../../../utils/themes'
import { typeScale } from '../../../utils/typography'


const base = (theme: ITheme) => css({
    fontFamily: theme.primaryFont
})

const normalStyle = (theme: ITheme) => css({
    fontWeight: 300
}, base(theme))

const heading1Style = (theme: ITheme) => css({
    color: theme.colour.accent
}, normalStyle(theme))

const heading2Style = (theme: ITheme) => css({
    color: 'red'
}, normalStyle(theme))

const heading3Style = (theme: ITheme) => css({
    color: 'green'
}, normalStyle(theme))

const heading4Style = (theme: ITheme) => css({
    color: 'blue'
}, normalStyle(theme))

type Props = {
    children: string
    element: string
}

/**
 * FIXME:
 *  - [ ]   Type '{ children: string; css: (theme: ITheme) => SerializedStyles; }' is not assignable to type 'IntrinsicAttributes'.
 *          Property 'children' does not exist on type 'IntrinsicAttributes'.
 */ 

const Text = ({children, element: Element}: Props) => {
    let style = base
        switch(Element) {
            case 'p' : style = normalStyle
            break
            case 'h1': style = heading1Style
            break
            case 'h2': style = heading2Style
            break
            case 'h3': style = heading3Style
            break
            case 'h4': style = heading4Style
            break
        }
        return (
            <Element css={style}>{children}</Element>
        )
    
}


export default Text