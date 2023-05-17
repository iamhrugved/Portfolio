import Link from 'next/link'
import React from 'react'

function Email() {
    return (
        <div className='email'>
            <Link
                href='mailto:pawar.hrugved@gmail.com'
                className='email-link'
                target='_blank'
            >
                pawar.hrugved@gmail.com
            </Link>
        </div>
    )
}

export default Email