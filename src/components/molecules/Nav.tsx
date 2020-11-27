/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import {Text} from '../atoms/Text'

interface NavTypes {
  pages: Array<PageObject>
  // element: string
}

interface PageObject {
  pathName: string
  pageName: string
}

/**
 * 
 *    pages   = array
 *    page    = object
 *    []Name  = string
 */

export const Nav = (props: NavTypes) => {
  const { pages } = props
  return (
    <nav>
      <ul>
        {pages.map( (page: PageObject) =>
          <li>
            <Link href={page.pathName}>
              <a>
                <Text element="p" fontWeight='light' fontSize='small'>
                  {page.pageName}
                </Text>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
