# Product List - Angular

Continuing with Angular learning....

I've a couple of questions I'd love feedback on - mostly based on my experience with React:

1) Am I mutating state and does this matter?
In the button component I am increasing/decreasing the quantity within the component rather than destroying and updating the state in DesertsService. Everything seems to work OK, but I'm not sure if this is bad practice?

2) Reaching into the DOM...
I'm reaching into the DOM to remove items from the Cart component. I feel like this is wrong. From working with React I feel like I should be handing this over to Angular to take care of rather than using `querySelector`.

I am also using the native HTML `dialog` element and methods for the modal. Again this feels wrong, and being able to dismiss the modal with the escape key knocks state out of sync. I used `@viewChild` to access the dialog, but honestly, I just pasted this in with little understanding.
