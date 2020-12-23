export function convertDocumentsToPlainObjects(documents) {
    const result = [];
    for (const document of documents) {
        result.push(document.toPlainObject());
    }
    return result;
}