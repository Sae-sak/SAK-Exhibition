import { db } from "@config/firebaseApp";
import { IComment } from "@type/comment";
import {
  CollectionReference,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import CommentItem from "./CommentItem";
import { orderBy } from "lodash";

export default function CommentList({ slug }: { slug: string }) {
  // firestore 의 comments collection 선택
  const commentsRef = collection(
    db,
    "comments"
  ) as CollectionReference<IComment>;

  // useCollecitonData 옵션 설정
  const options = {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  // 메시지 쿼리 생성 (slug 필드가 현재 페이지의 slug와 일치할 때만 가져오기)
  const commentsQuery = query(
    commentsRef,
    where("slug", "==", slug)
    // orderBy("createdAt", "desc")
  );

  // 메시지들 받아오기
  const [comments, loading, error] = useCollectionData(commentsQuery, options);

  return (
    <>
      {comments &&
        comments.map((comment, indx) => (
          <CommentItem key={`${comment.uid}${indx}`} comment={comment} />
        ))}
    </>
  );
}
