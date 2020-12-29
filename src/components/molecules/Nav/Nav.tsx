/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import Link from 'next/link'
import { Text } from 'src/components/atoms'
import { ITheme } from 'src/theme'
import { baseNav, baseUl, baseLink, dynamicStyle } from './Nav.styles'

export interface NavTypes {
  pages: Array<PageObject>
}

export interface PageObject {
  pathName: string
  pageName: string
}

export const Nav = (props: NavTypes) => {
  const { pages } = props
  const theme: ITheme = useTheme()
  return (
    <nav css={baseNav}>
      <ul css={baseUl}>
        {pages.map((page: PageObject) => (
          <li>
            <Link href={page.pathName}>
              <a css={baseLink}>
                <Text
                  additionalStyles={dynamicStyle(theme)}
                  element="a"
                  fontWeight="light"
                  fontSize="medium"
                >
                  {page.pageName}
                </Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
