// import React from 'react'

const Results = ({query}) => {
    const users = ["Anshi", "Vanshi", "Anshu", "Vanshu", "Murli", "Akshu"]
    const filtered = users.filter(u => u.toLowerCase().includes(query.toLowerCase()))
    console.log(filtered);
    // filtered give us filtered data like something data only which matches the condition or query
  return (
    <div>
        <ul>
            {
                filtered.map(u => <li key={u}>{u}</li>)
            }
        </ul>
    </div>
  )
}

export default Results