import React from 'react'
import Link from 'next/link'
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Socials() {
    const socialLinks = [
        { name: 'Github', icon: <FaGithub /> , link: 'https://www.github.com/iamhrugved' },
        { name: 'LinkedIn', icon: <FaLinkedin /> , link: 'https://www.linkedin.com/in/hrugvedpawar/' },
        { name: 'Leetcode', icon: <SiLeetcode /> , link: 'https://leetcode.com/iamhrugved/' },
        { name: 'Instagram', icon: <FaInstagram /> , link: 'https://www.instagram.com/hrugved.pawar/' },
        { name: 'Twitter', icon: <FaTwitter /> , link: 'https://www.twitter.com/iamhrugved' }
    ]


  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialLinks.map(({ name, icon, link }) => (
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank'>
                            {icon}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Socials