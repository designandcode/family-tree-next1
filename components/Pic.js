export const Pic = props => {
    
    const { uiData, id } = props;

    const familyTreeMember = uiData.family_tree_members.find(member => member.id === id);

    return <img className="tree-pic" src={familyTreeMember.photos[0]} />
}