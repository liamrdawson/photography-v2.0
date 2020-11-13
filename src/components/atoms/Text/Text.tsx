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
    
        return (
            <Element css={normalStyle}>{children}</Element>
        )
    
}


export default Text