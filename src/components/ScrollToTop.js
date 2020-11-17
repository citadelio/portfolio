import React, { useEffect, Fragment} from 'react'
import { withRouter, useLocation} from 'react-router-dom'
const ScrollToTop = () => {
    // useEffect(() => {
    //     const unlisten = history.listen(()=>{
    //         window.scrollTo(0,0)
    //     })
        
    //     return () => {
    //         unlisten()
    //     }
    // }, [])

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
 
// return <Fragment>{children}</Fragment>
return null
}


 

export default ScrollToTop;