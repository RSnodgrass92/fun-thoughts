import TeeCard  from "../components/teecard.js"

function filterByTags(array,tagsArr=[])
{
    let filteredArr= array;
    for (let x=0; x<tagsArr.length; x++)
    {
        filteredArr = filteredArr.filter(item => item.tags.includes(tagsArr[x]))
    }
 return filteredArr;
}


function filterBySearch(array,searchterm="")
{

//get rid of false spaces, if nothing is in the search field return an empty arr
searchterm=searchterm.trim();
if(searchterm.length===0)
{
    return [];
}

// fix plurals- all "cat" shirts should show up even if the user enters "cats"
if(searchterm.includes("s"))
{
    
    searchterm= (searchterm.split(" ")); 
  
    for(let x=0; x<searchterm.length; x++)
    {
        if (searchterm[x][searchterm[x].length-1]==="s")
        {
        searchterm[x] = searchterm[x].slice(0,searchterm[x].length-1)
        }
    }

    searchterm= searchterm.join(" "); 
}
        
//create an array of regex to check one for each word in search term
const regexArray= searchterm.split(" ").map(word=> new RegExp(word,"i"));

//apply each val of the regex array individually to the search terms
const vals=[];  
for (let x=0; x<regexArray.length; x++)
{
 vals.push(array.filter(index=> regexArray[x].test(index.description)))
}

// take val[0] and filter out items not found in other arrays
for(let x=0; x<vals.length; x++)
{
  vals[0]= vals[0].filter(a => vals[x].includes(a))
}

const filteredArr= vals[0];
return filteredArr; 
}


function display(filteredArr=[],tDivCSSclass="",cardDivCSSclass, cardBodyCSSclass){

    //if an empty arr is received return the str "empty" --> in the search component if display()===empty display nothing found
    if (filteredArr.length===0)
    {
        return "empty";
    }
    
    const remainder=filteredArr.length%4;
    const addon=filteredArr.slice(filteredArr.length-remainder, filteredArr.length); 
    const firstPart= filteredArr.slice(0,filteredArr.length-addon.length)
    const show=[];
    const showEnd=[];

    for(let x=0; x<firstPart.length-1; x+=4)
{
    show.push(<div className="row">
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${tDivCSSclass}`}>
        <TeeCard item={firstPart[x]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${tDivCSSclass}`}>
        <TeeCard item={firstPart[x+1]} css={cardDivCSSclass} cardBody={cardBodyCSSclass} ></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${tDivCSSclass}`}>
        <TeeCard item={firstPart[x+2]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
        </div>
        <div className={`col-xs-12 col-sm-6 col-md mx-0 mx-md-1 p-0 mt-1 ${tDivCSSclass}`}>
        <TeeCard item={firstPart[x+3]} css={cardDivCSSclass} cardBody={cardBodyCSSclass}></TeeCard>
        </div>
        </div> ); 
}

for(let x=0; x<addon.length;x++)
{
  showEnd.push(<div className={`col-xs-12 col-sm-6 col-md-3 mx-0 mx-md-1 p-0 mt-1 ${tDivCSSclass}`}>
  <TeeCard item={addon[x]}></TeeCard>
  </div>)
}
const output= [show,showEnd]; 
return output;
}

export {filterByTags,filterBySearch,display};