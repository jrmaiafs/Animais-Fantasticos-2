export default function clickOutSide(element, events, callback) {
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, "");
    events.forEach((userEvent) => {
      setTimeout(() =>
        document.documentElement.addEventListener(userEvent, handleClickOutSide)
      );
    });
  }

  function handleClickOutSide(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        document.documentElement.removeEventListener(
          userEvent,
          handleClickOutSide
        );
      });
    }
  }
}
