import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/StylesMain'
import { fetchFromDiscogs } from './utils'

export default function Records(){
  const [records, setRecords] = React.useState([])
  const [error, setError] = React.useState(null)
  const [filteredRecords, setFilteredRecords] = React.useState([]);
  const [loading, setLoading] = React.useState(null)
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    async function loadRecords(){
      setLoading(true)
      try{
        const data = await fetchFromDiscogs()
        console.log(data.data)
        setRecords(data.data)
        setFilteredRecords(data.data)

      }catch(err){
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadRecords()
   
  }, [])
  if (error) {
    return <div>Error: {error}</div>;
}
function handleChange(e) {
  setQuery(e.target.value);

        // Filter items based on search query
        const filtered = records.filter((record) =>
          record.basic_information.title.toLowerCase().includes(query.toLowerCase()) ||
        record.basic_information.artists[0].name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecords(filtered);
      };
  
return(
<box-l>
  <cluster-l justify="space-evenly" align="center">
  <box-l padding="var(--s0)">
    <h1 className="records-header">My Record Collection</h1>
  </box-l>
  <div className="search">
<input
  type="text"
  placeholder="Search..."
  value={query}
  onChange={handleChange}
/>

  </div>
  </cluster-l>
  <box-l padding="var(--s1)">
  <grid-l>
    {filteredRecords.map((record) => (
  <box-l padding="var(--s0)" key={record.id}>
      <div>
        <Link to={`/records/${record.basic_information.master_id}`}
              state={{recordData: record.basic_information}}>
        <frame-l ratio="1:1"><img src={record.basic_information.cover_image} alt={record.basic_information.title}/></frame-l>
        </Link>
      </div> 
  </box-l>  
  ))}
  </grid-l>
  </box-l>
</box-l>

)
}