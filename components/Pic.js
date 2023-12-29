import Image from 'next/image';

export const Pic = props => {
    
    const { uiData, id } = props;

    const familyTreeMember = uiData.family_tree_members.find(member => member.id === id);

    return <Image 
        className="tree-pic" 
        src={familyTreeMember.photos[0]} 
        width={500}
        height={500} />
}