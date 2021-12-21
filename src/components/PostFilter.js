import React from 'react';
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <input placeholder="Search"
                   value={filter.query}
                   onChange={event => setFilter({...filter,query:event.target.value})}
            />
            <MySelect value={filter.sort}
                      onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                      defaultValue={'Sort'}
                      options={[
                          {value: 'title', name: 'by name'},
                          {value: 'body', name: 'by description'},
                      ]}
            />
        </div>
    );
};

export default PostFilter;
