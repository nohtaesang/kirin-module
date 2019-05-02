('use strict');

const events = nodeArr => {
	const click = callback => {
		for (let node of nodeArr) {
			node.addEventListener('click', callback);
		}
	};

	return {
		click
	};
};

export default events;
/**
 * TODO:
 * blur()
 * change()
 * dblclick()
 * event.currentTarget
 * event.data
 * event.delegateTarget
 * event.isDefaultPrevented()
 * event.isImmediatePropagationStopped()	
 * event.isPropagationStopped()
 * event.namespace
 * event.pageX
 * event.pageY
 * event.preventDefault()
 * event.relatedTarget
 * event.result
 * event.stopImmediatePropagation()
 * event.target
 * event.timeStamp
 * event.type
 * event.which
 * focus()
 * focusin()
 * focusout()
 * hover()
 * keydown()
 * keypress()
 * keyup()
 * mousedown()
 * mouseenter()
 * mouseleave()
 * mousemove()
 * mouseout()
 * mouseover()
 * mouseup()
 * off()
 * on()
 * one()
 * ready()
 * resize()
 * scroll()
 * select()
 * submit()
 * trigger()
 * triggerHandler()
 * DONE:
 * click()
 */
