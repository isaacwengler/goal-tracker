import React, { Fragment } from 'react'
import Goals from './Goals'
import Form from './Form'

export default function Dashboard() {
    return (
        <div>
            <Fragment>
                <Form />
                <Goals />
            </Fragment>
        </div>
    )
}
