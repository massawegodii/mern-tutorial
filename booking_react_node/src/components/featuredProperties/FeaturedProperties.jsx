import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel National Park</span>
        <span className="fpCity">Arusha</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgs.search.brave.com/vL4mje_f885IUH6Yyal43io5_dHlWiCntlQUKsCGI1M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cGxhbmVzLWF0LXRo/ZS1haXJwb3J0Lmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Airport</span>
        <span className="fpCity">Dar es salaam</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgs.search.brave.com/fwxIWlFYjF0TvCPDSJhbNiP-7GrzqpBInq2xCA5Ba3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/NjA5MDU3L3Bob3Rv/L2x1eHVyeS1ob3Rl/bC1yb29tLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1OTjFP/VGRkdlV4R3gtQ05T/SFllMlNRdnNWN2Rp/TWc4QUJ5SWxuSE0z/OVh3PQ"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Morogoro</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgs.search.brave.com/_x8wha7Q-UqbrJLEojXw9rT24YhoqxXLu0RA0_CtW3Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob3VzZWFuZGdh/cmRlbi5jby51ay9w/aG90b3MvNjQ3MDY4/ZDIyMzY4OWNiYmUx/YmJiNDY2L21hc3Rl/ci93XzMyMCxjX2xp/bWl0L0NvcHklMjBv/ZiUyMFNob3QtMTct/Mjg0X1JULmpwZw"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mwanza Garden Inn</span>
        <span className="fpCity">Mwanza</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties