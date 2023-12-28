import cardImage1 from '../Images/portfolio-card-img-1.jpeg';


function Blog () {
return (
    <div className="mymix two-col" style={{position:'relative' , height:'1419px'}}>
    <div className="grid-sizer">
      <div className="isotop-item" style={{position:'absolute' , left:'10%' , top:'10%'}}>
        <div className="rounded-lg bg-[#fff0f0] p-6 border-[#212425]">
          <div className="overflow-hidden rounded-lg">
            <a href="#">
              <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={cardImage1}/>
            </a>
          </div>
          <span className="pt-5 text-[14px] font-normal text-gray-lite block">UI/UX</span>
          <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] mt-2">Surfboard</h2>
        </div>
      </div>
       
    </div>

  </div>
)
}

export default Blog;