import React from 'react'
import "../App"

function Footer_component() {
  return (
    <>
<footer className=' bg-black'>
        {/* footer-container */}
 <div className='flex md:max-h-40 justify-around my-50 py-10 gap-20 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
        {/* Col 1 */}
        <div className =' text-white flex flex-col items-center gap-5'>
            <p>FOLLOW US</p>
            <ul className='gap-5 flex flex-row'>
                <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="https://www.svgrepo.com/show/452231/instagram.svg" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="https://www.svgrepo.com/show/452047/linkedin-1.svg" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="https://www.svgrepo.com/show/452123/twitter.svg" alt="" className='h-8 border rounded-full cursor-pointer' />
            </ul>

             <div>
           </div>
        </div>

        {/* Col 2 */}
        <div className=' text-white flex flex-col gap-5 ' >
            <p>Frequently Asked Questions</p>
            <ul className='text-gray-500'>
                <li><a href="#">Q: Can I link from my website to a calculator on BMI.com? </a></li>
                <li><a href="#">Q: How should I send suggestions or report problems? </a></li>
                <li><a href="#">Q: How can I advertise on BMI.net?</a></li>
                <li><a href="#">Q: How do I delete my data from BMI.com?</a></li>
                <li><a href="#">Q: Do you have an API for the calculators? </a></li>
            </ul>
        </div>

        {/* Col 3 */}
         <div className=' text-white flex flex-col gap-5'>
            <p>Terms of Use</p>
            <ul className='text-gray-500'>
                <li>Security</li>
                <li>Links to Other Sites</li>
                <li>Children's Privacy</li>
                <li>Contact Us</li>
            </ul>
        </div>

         {/* Col 4 */}
         <div className=' text-white flex flex-col gap-5'>
            <p>Sitemap</p>
            <ul className='text-gray-500'>
                <li>Finance Calculator</li>
                <li>Salary Calculator</li>
                <li>Rent Calculator</li>
                <li>IRA Calculator</li>
            </ul>
        </div>
</div>

    <div className='md:max-h-100 py-5 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
        <ul className=' text-white flex flex-col items-center'>
            <li><img src="/public/images/bmi.png" alt="" className='h-20 py-3'/></li>
            <li><p>Copyright 2025 BMI Team, Inc.</p></li>
        </ul>
    </div>
    </footer>
</>
    
  )
}

export default Footer_component