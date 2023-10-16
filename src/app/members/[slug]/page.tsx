import familyMembers from '../../../../data/data_family_members.json';
import { Modal } from '../../../../components/Modal';
import { Bio } from '../../../../components/Bio'


// function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     }
//   }
 
//   // Call an external API endpoint to get posts
//   // const res = await fetch('https://.../posts')
//   const members = familyMembers;
 
//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = members.map((member) => ({
//     params: { slug: member.id },
//   }))
 
//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }

export default function MemberPage({ params }: { params: { slug: string } }) {

  const member = familyMembers.find(member => member.id === params.slug);

  if (!member) return null;

  return (
    <Modal>
      <Bio currentMember={member} />
    </Modal>
  )
}