import { useState } from 'react';

function TagsInput() {
    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        if (e.key !== 'Enter')
            return
        const value = e.target.value
        if (!value.trim())
            return
        setTags([...tags, value])
        e.target.value = ''
        // if (tags > 3) {
        //     alert("Stop")
        // }
    }

    function removeTag(index) {
        setTags(tags.filter((e, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            <div>          
                {tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text"> {tag} </span>
                        <span className="close" onClick={()=> removeTag(index)}>&times;</span>
                    </div>
            ))}
            </div>
            <div className="tags-input-button">
                <input onKeyDown={handleKeyDown} type="text" size="60" className="tags-input" placeholder="Tag sth"></input>
                {/* <button type='button' onClick={() => handleKeyDown}>srdtfybhjk</button> */}
            </div>
            
        </div>
)
}

export default TagsInput;





// export const ListOfResources = () => {

//     const [resourceList, setResourceList] = useState([{ resource: " " }]);

//     // console.log(resourceList);

//     const handleResourceAdd = () => {
//         setResourceList([...resourceList, { resource: " " }]);
//     };

//     const handleResourceRemove = (index) => {
//         const list = [...resourceList];
//         list.splice(index, 1);
//         setResourceList(list);
//     };

//     const handleResourceChange = (e, index) => {
//         const { name, value } = e.target;
//         const list = [...resourceList];
//         list[index][name] = value;
//         setResourceList(list);
//     };

//     // if (resourceList.length > 9) {
//     //     alert("Sorry, you cannot add more than 9 resources")
//     // }

//     // const onClick = (e) => {
//     //     const x = 0;
//     //     if (x < 4) {
//     //         alert ('ghj')
//     //     } else {
//     //         alert ('fghj')
//     //     }
//     //     e.preventDefault();
//     //     console.log(e);
//     // }
//     return (
//         < StatisticModal >
//             <div>
//                 <label htmlFor="resource"> Resource(s) </label>
//                 <h3> Please, add resource(s) below </h3>
//                 <p>Remember, that you can add no more than 9 resources</p>
//                 {resourceList.map((singleResource, index) => (
//                     <div key={index} >
//                         <div>
//                             <Input
//                                 name="resource"
//                                 type="text"
//                                 id="resource"
//                                 value={singleResource.resource}
//                                 onChange={(e) => handleResourceChange(e, index)}
//                                 required
//                             />
//                             {resourceList.length - 1 === index && resourceList.length < 9 &&
//                                 (
//                                     <span
//                                         type="button"
//                                         onClick={handleResourceAdd}
//                                     > Add </span>
//                                 )
//                             }
//                         </div>
//                         <div>
//                             {resourceList.length !== 1 &&
//                                 (
//                                     <span
//                                         type="button"
//                                         onClick={() => handleResourceRemove(index)}
//                                     >
//                                         <span>&times;</span>
//                                     </span>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <h3>Added resource(s)</h3>
//                 {
//                     // resourceList &&
//                     resourceList.map((singleResource, index) => (
//                         <ul key={index}>
//                             {singleResource.resource && <li> {singleResource.resource} </li>}
//                         </ul>
//                     ))
//                 }
//             </div>
//         </StatisticModal>
//     );
// }
