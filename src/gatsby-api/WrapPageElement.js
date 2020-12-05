import React from 'react'
import Layout from '../components/Layout'

const WrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

export default WrapPageElement