export const BASE_URL = 'http://localhost:4000/v1'
export const PARAGRAPH = [
    {
        p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdumorci at ex cursus, ut tincidunt dolor rhoncus. Nunc dolor massa, tempuseget erat id, vehicula consequat risus. Duis suscipit sagittis quam invarius. Phasellus accumsan luctus maximus. Nullam a felis dui. Ut veldictum odio, eget blandit turpis. Vestibulum ultricies nisl magna,fermentum dignissim dui condimentum et. Aliquam placerat, mi quispretium varius, sem nibh gravida nisl, et pharetra diam arcu nec massa.Nunc eu diam felis. Nunc sollicitudin volutpat scelerisque. Vivamusultrices felis volutpat, dignissim magna blandit, vulputate neque.Vestibulum sed mauris vitae ante hendrerit dictum non ac tortor.Praesent cursus magna nulla, sed auctor lorem lobortis at. Praesentfacilisis tellus eu sapien placerat, non pellentesque odio finibus. Utullamcorper egestas risus, nec bibendum lorem rhoncus id. Nam rutrumpharetra ligula, at eleifend velit interdum vel. Maecenas metus massa,bibendum vitae tempus interdum, molestie ac ligula. Suspendisse potenti.Etiam fringilla ipsum ipsum, quis faucibus orci eleifend sed. Quisqueeuismod at eros et ornare. Mauris porttitor et magna scelerisquesagittis. Nullam vitae ullamcorper ligula. Nam molestie lacus justo, etpretium lectus feugiat a. Proin ut sollicitudin metus. Nulla quis loremrhoncus, interdum nunc sit amet, mattis justo. Aenean malesuada ex mi, hendrerit mauris imperdiet a. Curabitur elementum elit lacus, at auctormi consectetur et. Praesent vel dui sit amet magna dictum suscipit. Utquam lectus, egestas a congue elementum, egestas vel nisi. Fusceimperdiet in elit vitae sagittis. Donec gravida, mauris vitae tincidunttincidunt, tellus ipsum sollicitudin risus, nec tincidunt dolor leo sederos. Suspendisse cursus velit enim, ac commodo orci imperdiet vitae.Aliquam ut est malesuada magna viverra lacinia sit amet ut nulla.ellentesque volutpat porttitor nunc, quis sollicitudin velit aliquetvitae."
    },
    {
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
]
export const INPUTS_FIELDS = [

    { label: "First Name:", name: "firstname", type: "text" },
    { label: "Last Name:", name: "lastname", type: "text" },
    { label: "Age:", name: "age", type: "number" },
    { label: "Email:", name: "email", type: "email" },
    { label: "Date of Birth:", name: " date of birth", type: "date" },
    { label: "Upload Photo:", name: "upload photo", type: "file" },
    {
        label: "Marital Status:", name: "marital Status:", type: "select", options: ["Married", "Single", "Engaged"]
    },
    {
        label: "Gender:", name: "gender:", type: "select", options: ["Male", "Female"]
    },
    {
        label: "Country:", name: "country:", type: "select", options: ["Canada", "Califonia", "Nigeria", "Europe"]
    },
    {
        label: "Job:", name: "job:", type: "select", options: ["Employed", "Unemployed", "Selfemployed", "Student"]
    },

]