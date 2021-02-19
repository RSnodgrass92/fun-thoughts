
import usersArr from "./users.js"

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
 vals.push(array.filter(index=> regexArray[x].test(`${index.description} ${index.modelNum}`)))
}

// take val[0] and filter out items not found in other arrays
for(let x=0; x<vals.length; x++)
{
  vals[0]= vals[0].filter(a => vals[x].includes(a))
}

const filteredArr= vals[0];
return filteredArr; 
}

function calcNumItemsInCart(array)
{
    if (array.length>0)
    {
    const onlyQtyArr= array.map((index)=>Number(index.qty))
    const sum= onlyQtyArr.reduce((total,val)=> total+val)
    return sum;
    }
    else return 0;
}

function calcSubtotal(array)
{
    if (array.length>0)
    {
    const qtyTimesPriceArr = array.map((index)=>Number(index.qty)*index.price)
    const sum= qtyTimesPriceArr.reduce((total,val)=> total+val).toFixed(2)
    return sum;
    }
    else return 0;
}

function testCredentials (email, password)
{
    const findMatches = usersArr.filter((user)=> user.email===email && user.password === password)
    if (findMatches.length)
    {
        return findMatches[0]
    }
    else return false
}



export {filterByTags,filterBySearch,calcNumItemsInCart,calcSubtotal,testCredentials};
