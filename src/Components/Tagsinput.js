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
        // if (tags.length > 3) {
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


