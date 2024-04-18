import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-[90%] pl-[90px]'>
        <div className='bg-blue-300 text-center mt-14 p-14 '>
            <h1 className='text-6xl font-bold'>Instructions</h1>
            <p>It’s great to see you! This Quick Start Guide will show you basics on how to get started editing your website.</p>
        </div>
        <div className='bg-yellow-300 mt-20 p-20'>
            <p>If you are just beginning with Webflow, we highly recommend you to take Webflow 101 Crash Course, as this introductory course by Webflow University offers the overview of the basics and the most essential information you need to learn to get up and building your first Webflow website.</p>
        </div>
        <div className='mt-20 border-2 border-black'>
            <h2 className='bg-red-300 p-8 text-3xl font-bold'>Customizing colors</h2>
            <p className='mt-3'>This template utilizes the Webflow variables feature, allowing you to effortlessly modify all colors, which will be promptly updated across the entire site.</p>
            <p className='mt-1'>To adjust a color, navigate to the Variables panel, then choose the color you wish to modify.</p>
            <h3 className='mt-4 font-bold'>SVG element color</h3>
            <p className='mt-2 mb-4'>In order to change the color of SVGs, Download .svg file from Assets and open it to any text editor. Change HEX color code with color of your choice and replace updated .svg file with the current file.</p>
        </div>
        <div className='mt-20 border-2 border-black'>
            <h2 className='text-3xl font-bold bg-red-300 p-8'>Changing Fonts</h2>
            <p className='mt-8'>The fonts used in this template are free to use.</p>
            <ol  className='mt-5'>
                <li>1. Body (All pages): Changing the body font will affect all fonts on the entire site</li>
                <li>2. Heading (All headings): Changing the heading font will affect all heading fonts on the entire site.</li>
            </ol>
            <p className='mt-8'>In case you want to change fonts, you can always go to Project Settings  Fonts and you will be able to upload any custom fonts, can use Google Fonts or even you can connect your Adobe Fonts account.‍</p>
            <p className='mt-8 mb-4'>Once upload font from Project Settings, click on the orange selector option in the top right of the Style tab and select Body (All Pages). Now go to the Typography section below and change the font as per your need. Changing the body font will affect all fonts on the entire site.</p>
        </div>
        <div className='mt-20 border-2 border-black'>
            <h2 className='text-3xl font-bold bg-red-300 p-8'>Template Support</h2>
            <p className='mt-8'>We&apos;ll be glad to help you out with your queries. Please contact us at the Webflow template support page and you shall hear back very soon.</p>
            <h3 className='font-bold mt-5'>Custom Design & Development</h3>
            <p className='mt-8 mb-4'>If you are looking for Custom Design & Development with Webflow, feel free to reach us via <Link href='https://www.webestica.com/webflow-development'>Reach us out here.</Link></p>
        </div>
        <div  className='mt-20 border-2 border-black mb-16'>
            <h2  className='text-3xl font-bold bg-red-300 p-8'>Important notes:</h2>
            <p><strong>. SVG:</strong> For a superior visual experience, we suggest using SVG icons and logotypes. To find a wide selection of SVG icons, you can browse Icon Finder and use the free filter to refine your search.</p>
            <p><strong>. Resize your Images:</strong>It is important to resize your images before adding them to your website, rather than simply downloading and placing them as they are. The size and resolution of an image can have a significant impact, and using an image size of 1200px x 800px for a content size of 300px x 200px is unnecessary. Resize it to 300px x 200px.</p>
            <p><strong>. Image Formats</strong>There are mainly 2 common file types that are used for web images which are JPEG and PNG. For images with a Flat Background use JPEG images, for images with a Transparent background use PNG images.</p>
            <p><strong>. Compress images to WebP: </strong>For a better loading site, compress existing image assets with the built-in<Link href='https://university.webflow.com/'> WebP conversion tool.</Link> Please note, Webflow compression tool is currently not available within the CMS. You will need to manually convert them to WebP format and compress them separately.</p>
            <p><strong>. Clean up:</strong><Link href='https://university.webflow.com/lesson/triggers-and-animations'>Clean up interactions</Link> and <Link href='https://university.webflow.com/lesson/style-selectors-panel?topics=layout-design#clean-up'> Clean up CSS styles </Link>before publishing your site.</p>
            <p><strong>. Audit panel:</strong>Before going live with your site, find and fix accessibility issues with Webflow&apos;s Audit panel.</p>
            <p><strong>. Compressing Images:</strong>For a better loading site, we recommend optimizing all your images using services like <Link href='https://tinypng.com/'>Tinypng.com</Link></p>
            <p><strong>. SEO:</strong>Before publishing your site, make sure to edit the Title Tag, Meta Description, etc. For more information on SEO and how to optimize your website, Visit <Link href='https://university.webflow.com/lesson/seo-title-meta-description?topics=seo'>Add SEO title and meta description </Link> and <Link href='https://webflow.com/blog/seo-and-webflow-the-essential-guide'>SEO and Webflow: the essential guide.</Link></p>
        </div>
    </div>
  )
}