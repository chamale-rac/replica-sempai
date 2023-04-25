import React from 'react'
import PropTypes from 'prop-types'

import * as containerStyles from './container.module.css'

function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Container
