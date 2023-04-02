// Find all divs with class name "gradient"
var elements = document.querySelectorAll("div.gradient, div.scrim__body");

// Loop through each matching div and remove it
for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
}

// Create a new mutation observer
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Loop through each added node in the mutation
        mutation.addedNodes.forEach(function(node) {
            // Check if the added node is a div with class name "gradient" or "striped"
            if (node.nodeName === "DIV" && (node.classList.contains("gradient") || node.classList.contains("scrim__body"))) {
                // Remove the node
                node.remove();
            }
        });
    });
});

// Observe the document for mutations to child nodes
observer.observe(document, { childList: true, subtree: true });
