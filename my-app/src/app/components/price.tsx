import React from "react";
import { CheckCircle, Mail, BarChart2, Zap, Brain } from "lucide-react";
import { describe } from "node:test";
import Image from "next/image";
export default function PricingPage() {
  return (
    <div className="bg-white text-gray-800 font-inter">
      {/* Features Section */}
      <section className="py-16 text-center max-w-7xl mx-auto px-4">
        <p></p>
        <h2 className="text-3xl font-bold mb-10 font-inter">Put the spotlight on the 
          <p>main features</p></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10">
      {/* Box 1 */}
      <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-xl text-left">
       <Image
           src="/images/icon1.png"
           alt="icon1"
           width={50}
           height={60}
           className="rounded-lg py-1"
         />
        <div className="text-left">
        <h3 className="text-lg font-semibold mt-4">Instant Warmup</h3>
        <p className="text-sm mt-2">
          Backed stats to simplify finalizing reporting and cash flow analysis.
        </p>
       
        </div>
        <button className="mt-27 text-black hover:underline ">Learn More ↗</button>
      </div>

      {/* Box 2 */}
      <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-xl text-left  shadow-md">
      <Image
           src="/images/icon2.png"
           alt="icon1"
           width={50}
           height={60}
           className="rounded-lg py-1"
         />
        <div className="text-left">
      
        <h3 className="text-lg font-semibold mt-4">Improved Deliverability</h3>
        <p className="text-sm mt-2">
          Improving performance by reducing spam, blacklists, and online sales.
        </p>
       
        </div>
        <button className="mt-27 text-black hover:underline ">Learn More ↗</button>
      </div>

      {/* Box 3 */}
      <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-xl text-left border border-blue-100" style={{
    background: "linear-gradient(to bottom, #B6D8FF, #FFFFFF)",
  }}>
         <Image
           src="/images/icon3.png"
           alt="icon1"
           width={50}
           height={60}
           className="rounded-lg py-1"
         />
        <div className="text-left">
        <h3 className="text-lg font-semibold mt-4">Automated Reports</h3>
        <p className="text-sm mt-2">
          Track all your daily warmup reports for deeper insight and performance-driven insights.
        </p>
        
        </div>
        <button className="mt-27 text-black hover:underline ">Learn More ↗</button>
      </div>

      {/* Box 4 */}
      <div className="bg-[#F1F8FF] h-[390px] py-5 px-4 rounded-xl text-left border border-blue-100">
      <Image
           src="/images/icon4.png"
           alt="icon1"
           width={50}
           height={60}
           className="rounded-lg py-1"
         />
        <div className="text-left">
        <h3 className="text-lg font-semibold mt-4">AI Insights</h3>
        <p className="text-sm mt-2">
          Smart transformations for delivering the best marketing auto-categorization.
        </p>
        
        </div>
        <button className="mt-27 text-black hover:underline ">Learn More ↗</button>
      </div>
    </div>
      </section>

      {/* Why Autowarm */}
      
      <section className="bg-blue-50 py-4 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Autowarm</h2>
      <div className='max-h-screen grid grid-cols-2 bg-no-repeat bg-cover font-inter'>
      
         <div className="w-[1040.843px] h-[550px] rotate-[0.098deg] flex-shrink-0">
         <div className="mt-20 ml-30 max-w-xl inline-grid mx-4 my-14">
         <p className="text-3xl font-inter text-black font-bold">
           Where your emails
         </p>
         <p className="text-3xl font-inter text-black font-bold">
           directly reach to your 
         </p>
         <span className="text-blue-600 font-bold text-3xl mb-2">customer</span>
          <p className="text-xl font-inter text-gray-700">
        A cloud application or a cloud app,is a software
          </p>
          <p className="text-xl font-inter text-gray-700">
        <span> program where cloud based and local</span>
          </p>
          <p className="text-xl font-inter text-gray-700">
        <span className="pb-6">components worked together</span>
          </p>
           <div className="flex space-x-4 pt-8">
         <button className='bg-blue-500 text-white py-3 px-9 rounded-2xl font-inter'>Learn More</button>
         <button className='text-black bg-white py-4 px-9 rounded-2xl border-1 border-blue-200 font-inter'>Contact Us</button>
           </div>
        </div>
        </div>  
       <div className="ml-19 mr-10 mt-15">
       <div>
       <Image
           src="/images/wya1.png"
           alt="icon1"
           width={30}
           height={30}
           className="rounded-lg py-2"
         />
          <h4 className="font-bold text-lg mb-2">Reach more Leads and Customers</h4>
          <p>We will provide you lead support through the process of setting up email warmup, with expert help.</p>
        </div>
        <div>
        <Image
           src="/images/wya2.png"
           alt="icon1"
           width={30}
           height={30}
           className="rounded-lg pt-6 pb-2"
         />
          <h4 className="font-bold text-lg mb-2">Avoid Spam Folders & Blacklist</h4>
          <p>Emails are monitored and scored according to your filters and report. You will get a score of all the filters.</p>
        </div>
        <div>
        <Image
           src="/images/wya3.png"
           alt="icon1"
           width={30}
           height={30}
           className="rounded-lg pt-6 pb-2"
         />
          <h4 className="font-bold text-lg mb-2">AI-Enabled Feedback</h4>
          <p>Our AI will help you reach and give you the critical feedback and help you blend into the inbox realm.</p>
        </div>
       </div>
         
         </div>
         </section>
      {/* Pricing Plans */}
      <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <div className="border rounded-2xl p-6 shadow-sm border-[#9BC7FF] transition">
            <h3 className="text-xl font-bold mb-2 mr-0">Basic <span className="text-3xl font-bold text-black mb-4 text-right pl-22">$0/m</span></h3>
           
            <p className="text-sm text-gray-600 text-left">
              Perfect for getting started 
            </p>
            <p className="text-sm text-gray-600 mb-6 text-left">with basic tools and content.</p>
            <button className="text-blue-500 bg-white px-27 py-3 rounded-xl font-medium border-1 ">
              Get Started
            </button>
            <p className="text-sm text-gray-600 my-6">
              *No credit card required for the Free Plan.
            </p>
            <ul className="text-left mb-6 space-y-2">
              {[
                "Email campaigns",
                "Limited AI insights",
                "Standard reporting",
                "Blacklist monitoring",
                "One account support (1 account)"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <CheckCircle className="text-blue-500 w-4 h-4 mr-2" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-2xl p-6 shadow-sm  border-[#9BC7FF] bg-[#EDF5FF] ">
            <h3 className="text-xl font-bold mb-2">Premium <span className="text-3xl font-bold text-black mb-4 text-right pl-22">$70/m</span></h3>
            
            <p className="text-sm text-gray-600 mt-3 text-left">
            Perfect for getting wide range of
            </p>
            <p className="text-sm text-gray-600 mb-6 text-left">potential leads and customers.</p>
            <button className="bg-blue-500 text-white px-27 py-3 rounded-xl font-medium ">
              Get Started
            </button>
            <p className="text-sm text-gray-600 my-6">
              *Credit card required for the Pro Plan.
            </p>
            <ul className="text-left mb-6 space-y-2">
              {[
                "Email campaigns",
                "AI-enabled insights",
                "Unlimited AI reports",
                "Blacklist monitoring",
                "Customer support",
                "Expanse categorization"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <CheckCircle className="text-blue-500 w-4 h-4 mr-2" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-2xl p-6 shadow-sm border-[#9BC7FF] transition">
            <h3 className="text-xl font-bold mb-2 text-left ">Enterprise <span className="text-3xl font-bold text-black mb-4 text-right pl-22">$120/m</span></h3>
            
            <p className="text-sm text-gray-600 mt-3 text-left">
            Perfect for getting started with 
            
            </p>
            <p className="text-sm text-gray-600 mb-6 text-left">basic leads and customers.</p>
            <button className="text-blue-500 bg-white px-27 py-3 rounded-xl font-medium border-1 ">
              Get Started
            </button>
            <p className="text-sm text-gray-600 my-6">
              *Credit card required for the Enterprise Plan.
            </p>
            <ul className="text-left mb-6 space-y-2">
              {[
                "Email campaigns",
                "Advanced AI analytics",
                "Automated data sync",
                "Dedicated support",
                "Secure data control (multi account)"
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <CheckCircle className="text-blue-500 w-4 h-4 mr-2" /> {feat}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
