import Link from 'next/link'
import { Pic } from './Pic';
import { Spouse } from './Spouse';

export const Tree = props => {

    const { uiData, controllerFunction } = props;

    console.log(uiData)

    return uiData.family_tree.map(data => {
        console.log(data.id);


        return (

                <div className={`join spacer-${data.level}`}>
                    <div>
                        <span className="connector"></span>
                        <Link href={`/members/${data.id}`}>
                        <span className="member">{data.name}<Pic uiData={uiData} id={data.id} /></span>
                        </Link>
                    </div>
                    { data.spouseId && <Spouse data={data} uiData={uiData} /> }
                </div>

        )
    })
}