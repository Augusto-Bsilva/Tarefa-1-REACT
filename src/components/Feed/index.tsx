import style from './styles.module.css'
import Post from '../Post'
export default function Feed(){
    return(
     <div className={style.feed}>
            <Post autorPic="https://t3.ftcdn.net/jpg/06/38/74/42/240_F_638744234_NA6mRsf3jxGm2YZclp9FeA99ZBsxcs2d.jpg" name="Ruan" cargo="Dev Back-end" />
            <Post autorPic="https://t3.ftcdn.net/jpg/03/23/31/52/240_F_323315268_QnS8LI9w8gLQI6fKPv5uzHzsQmPZ74vO.jpg" name="Natasha" cargo="Designer" 
            comentsProntos={[
                {
                    id:1,
                    name:'Maria Célia',
                    autorPic:'https://as2.ftcdn.net/v2/jpg/04/07/34/77/1000_F_407347701_dejg4HjbiH2TLIYMkBUVdPsjVledmTGF.jpg',
                    text:'Ótimo designe lobinho!'
                }
            ]}
            
            />
            <Post autorPic="https://t3.ftcdn.net/jpg/01/80/70/56/240_F_180705627_AAtisO2IRkSEDnG72u7Rvlj5LRJBNYPO.jpg" name="Alberto" cargo="CEO" 
            comentsProntos={[
                {
                    id:2,
                    name:'leonardo',
                    autorPic:'https://t4.ftcdn.net/jpg/00/02/97/69/240_F_2976920_wqDjbyVWWYZaSyLV1Gvnf2vnoCDj6z.jpg',
                    text:'Me promove por favor chefe!'
                }
            ]}
            
            
            />

     </div>
    )
}