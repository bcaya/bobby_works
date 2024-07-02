import React from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import '../assets/StylesMain'
import { fetchReleaseData } from './utils'

export default function RecordDetailPage(){
  const params = useParams();
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  let location = useLocation()
 const [recordData, setRecordData ] = React.useState(location.state.recordData)
 const [dateAdded, setDateAdded] = React.useState(location.state.dateAdded)
 const [recordDetails, setRecordDetails] = React.useState(null)

 React.useEffect(() => {
  async function loadRecordDetails(){
    try {
      const data = await fetchReleaseData(`${location.state.id}`);
      setRecordDetails(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  loadRecordDetails()
 },[location.state.id])
 function ImageEl(){
  if (!recordDetails || !recordDetails.images) {
    return <div>No images to display</div>;
  }
  return recordDetails.images.map((image) => {
    return(
        <frame-l ratio="1:1" key={image.id}>
          <img  alt={image.type} src={image.resource_url}/>
        </frame-l>
     ) 
    
  })
}

function ReleaseNotesEl(){
  if(!recordDetails || !recordDetails.notes){
    return <h3>No release notes</h3>
  }
  return <p>{recordDetails.notes}</p>
}
 function RecordEl(){
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      };
      return <box-l key={recordData.id}>
            <box-l>
            <Link 
          to=".." //this is a link back to the relative path aka so you can go back to what you weere prev looking at. 
          relative="path"
          className="back-button"
          >&larr; <span>Back to collection</span></Link>
            </box-l> 
      <h1>{recordData.artists[0].name} - {recordData.title}</h1>
      <h5>Added to my collection on {new Date(dateAdded).toLocaleDateString('en-US', options)}</h5>
      <box-l ><frame-l ratio="1:1"><img src={recordData.cover_image}/></frame-l></box-l>
      <box-l>
      <h4>Release year: {recordData.year}</h4>
        <h3>Labels: </h3> 
          <cluster-l>
          {recordData.labels.map((label) => {
        return(<button key={label.id}>{label.name}</button>)  
        })}
          </cluster-l>
      </box-l>
      <box-l>
        <h3>Genres</h3>
        <cluster-l>
        {recordData.genres.map((genre) => {
          return (<button key={genre}>{genre}</button>)
        })}
        </cluster-l>
      </box-l>
      <box-l>
        <h3>Styles</h3>
        <cluster-l>
          {recordData.styles.map((style) => {
            return (<button>{style}</button>)
          })}
        </cluster-l>
      </box-l>
      <box-l>
        <h3>Formats</h3>
      <cluster-l>
      {recordData.formats[0].descriptions.map((description) => {
        return( <button>{description}</button>)
      })}
      </cluster-l>
      </box-l>
      <box-l>
        <h3>Release Notes</h3>
        <ReleaseNotesEl/>
      </box-l>
      </box-l>
}
 if(loading){
  return <h1>Loading...</h1>
}


if(error){
  return <h1>There was an error: {error.message}</h1>
}
 return (
  <box-l borderWidth="0">
    <stack-l>
    <RecordEl/>
   
    <reel-l itemWidth="25rem">
      <ImageEl/>
    </reel-l>
    </stack-l>

  </box-l>
  
 )
}