directory="data"


file_list=()
invalid_links=()

# Iterate over each file in the directory
for file in "$directory"/*; do
    # Check if the path is a file (not a directory)
    if [[ -f "$file" ]]; then
        # Add file path to the array
        file_list+=("$file")
    fi
done

echo "Found files:"
for file in "${file_list[@]}"; do
    echo $file
done



for file in "${file_list[@]}"; do
    # Extract links from the .json file
    links=$(jq -r '.nodes[].data.link' $file)

    filtered_links=()

    # Clean and Filter possible links
    for link in $(echo "${links[@]}"); do
        if [[ "$link" == https://* ]]; then
            filtered_links+=("$link")
        fi
    done

    # Check link if they are still being served
    for link in "${filtered_links[@]}"; do
        http_status=$(curl -s -o /dev/null -w "%{http_code}" $link)
        echo "$link"
        echo "$http_status"
        if [[ "$http_status" != "200" ]]; then
            echo "Invalid Link detected"
            invalid_links+=("$link")
        fi
    done
done


for link in "${invalid_links[@]}"; do
    echo "Invalid Link"
    echo $link
done

if [[ ${invalid_links[@]} ]]; then
    exit 1;
fi