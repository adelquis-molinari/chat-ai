import { useMessageStore } from '@/store/messages'
import Message from './Message'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Welcome } from './Welcome'
import { ChatForm } from './ChatForm'

// export default function Chat() {
//   const messages = useMessageStore((state) => state.messages)
//   console.log(messages)
//   return (
//     <div className='flex flex-col h-full flex-1 pl-64'>
//       <main>
//         {messages?.map((entry) => (
//           <Message key={entry?.id} {...entry} />
//         ))}
//       </main>
//       <ChatForm />
//     </div>
//   )
// }
export default function Chat() {
  const selectedConversation = useMessageStore(
    (state) => state.selectedConversation
  )
  const messages = useMessageStore((state) => {
    const { selectedConversation } = state
    return state.conversationsMessages[selectedConversation]
  })
  const [animationParent] = useAutoAnimate()

  const renderContent = () => {
    if (!selectedConversation) return <Welcome />
    return (
      <div className='flex-1 overflow-hidden'>
        <div className='h-full overflow-auto'>
          {messages?.map((entry) => (
            <Message key={entry.id} {...entry} />
          ))}
          <div className='flex-shrink-0 w-full h-32 md:h-48 bg-gptgray' />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col flex-1 h-full lg:pl-64'>
      <main className='relative w-full' ref={animationParent}>
        {renderContent()}
        <ChatForm />
      </main>
    </div>
  )
}
