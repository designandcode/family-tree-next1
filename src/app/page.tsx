import familyTreeData from '../../data/data_family_tree_simple.json';
import familyMembers from '../../data/data_family_members.json';
import { Tree } from '../../components/Tree';

export default function Home() {

  const data = {
    family_tree: familyTreeData,
    family_tree_members: familyMembers
  }

  return (
    <main>
      <Tree uiData={data}  />
    </main>
  )
}
