import { Component } from 'react'; 
import {connect} from "react-redux"
import {setUser} from "../redux/actions"
import TeeCard from "./teecard"
import {toast} from "react-toastify"
import WishToast from "../components/wishtoast"

toast.configure()

class DisplayTees extends Component

{
    constructor(props)
    {
        super(props)
        this.handleWishListClick= this.handleWishListClick.bind(this);
        
    }
    
    handleWishListClick(item)
    {
        const userToEdit = this.props.user
        userToEdit.itemsOnWishList= [...userToEdit.itemsOnWishList,item]
        this.props.setUser(userToEdit)
        toast.success(<WishToast  item={item.description} />,{ 
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
         } )
    }

    display(filteredArr=[], tDivCSSclass="",cardDivCSSclass, cardBodyCSSclass){

        const remainder=filteredArr.length%4;
        const addon=filteredArr.slice(filteredArr.length-remainder, filteredArr.length); 
        const firstPart= filteredArr.slice(0,filteredArr.length-addon.length)
        const show=[];
        const showEnd=[];
    
        for(let x=0; x<firstPart.length-1; x+=4)
    {
        show.push(<div className="row">
            <div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 ${tDivCSSclass}`}>
            <TeeCard wishClick={()=>this.handleWishListClick(firstPart[x])} item={firstPart[x]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
            </div>
            <div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 ${tDivCSSclass}`}>
            <TeeCard wishClick={()=>this.handleWishListClick(firstPart[x+1])} item={firstPart[x+1]} css={cardDivCSSclass} cardBody={cardBodyCSSclass} ></TeeCard>
            </div>
            <div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 ${tDivCSSclass}`}>
            <TeeCard wishClick={()=>this.handleWishListClick(firstPart[x+2])} item={firstPart[x+2]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
            </div>
            <div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 ${tDivCSSclass}`}>
            <TeeCard  wishClick={()=>this.handleWishListClick(firstPart[x+3])} item={firstPart[x+3]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
            </div>
            </div> ); 
    }
    
    for(let x=0; x<addon.length;x++)
    {
      showEnd.push(<div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 ${tDivCSSclass}`}>
      <TeeCard  wishClick={()=>this.handleWishListClick(addon[x])} item={addon[x]}></TeeCard>
      </div>)
    }
    
    for(let x=0; x<(4-addon.length); x++)
    {
        showEnd.push(<div className={`col-xs-12 col-sm-6 col-lg mx-0 mx-lg-1 p-0 mt-1 hideSearch${tDivCSSclass}`}>
        
        </div>)
    }
    
    const output= [show,showEnd]; 
    return output;
    }

    render() {
        console.log(this.props)
        return (
        <div className="container">
        {this.display(this.props.filteredArr, this.props.tDivCSSclass)[0]}
        <div className="row">
        {this.display(this.props.filteredArr, this.props.tDivCSSclass)[1]}
        </div>
        </div>
            )
      }
};



const mapStateToProps= (state) => {
    return {
     user: state.user,
  
    }
  }
  
  const mapDispatchToProps= ()=> {
    return {
       setUser: setUser, 
    }
   }
  
  export default connect(mapStateToProps, mapDispatchToProps())(DisplayTees); 




  