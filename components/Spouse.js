import Link from 'next/link';
import { Pic } from './Pic';

export const Spouse = props => {


    const { data, uiData } = props;

    return(
        <div className="spouse">
            <span className="spacer-join"></span> 
            <Link href={`/members/${data.spouseId}`}>
                <span className="member">{data.spouseName}<Pic uiData={uiData} id={data.spouseId} /></span>
            </Link>
        </div>
    )
}