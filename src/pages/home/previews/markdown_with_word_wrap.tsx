import { Markdown, MaybeLoading } from "~/components"
import { useFetchText } from "~/hooks"
import { objStore } from "~/store"
import { ext } from "~/utils"

const MdPreview = () => {
  const [content] = useFetchText()
  return (
    <MaybeLoading loading={content.loading}>
      <MarkdownAdd
        commentMore
        actions
        class="word-wrap"
        children={content()?.content}
        ext={ext(objStore.obj.name)}
        tocAdd
        commentMore
        actions
      />
    </MaybeLoading>
  )
}

export default MdPreview
