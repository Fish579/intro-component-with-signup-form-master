<h1>Registration Page</h1>
 <p>
            A responsive registration page built using HTML, CSS, JavaScript, and Tailwind CSS. This page features user input validation with dynamic error messages for required fields, making it easy to use and accessible on both desktop and mobile devices.
        </p>

<h2>Table of Contents</h2>
<ul class="list-disc list-inside mb-6">
            <li><a href="#demo">Demo</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#folder-structure">Folder Structure</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#license">License</a></li>
        </ul>
<h2 id="demo" class="text-2xl font-semibold mt-8 mb-4">Demo</h2>

<h2 id="features" class="text-2xl font-semibold mt-8 mb-4">Features</h2>
        <ul class="list-disc list-inside mb-6">
            <li>Responsive design that adapts for both desktop and mobile screens.</li>
            <li>Input validation with real-time error messages for required fields.</li>
            <li>Dynamic error messages displayed below the corresponding input fields.</li>
            <li>Smooth transitions and styling powered by Tailwind CSS.</li>
        </ul>
        
<h2 id="technologies" class="text-2xl font-semibold mt-8 mb-4">Technologies</h2>
        <ul class="list-disc list-inside mb-6">
            <li><strong>HTML5</strong>: Markup structure of the page.</li>
            <li><strong>CSS3</strong>: Custom styling in combination with Tailwind CSS for layout.</li>
            <li><strong>JavaScript</strong>: Input validation and error handling.</li>
            <li><strong>Tailwind CSS</strong>: Utility-first CSS framework for responsive design and styling.</li>
        </ul>        

<h2 id="setup" class="text-2xl font-semibold mt-8 mb-4">Setup</h2>
        <ol class="list-decimal list-inside mb-6">
            <li>Clone the repository or download the project files:
                <pre class="bg-gray-200 p-3 rounded mt-2">git clone https://github.com/your-username/registration-page.git</pre>
            </li>
            <li>Navigate to the project directory:
                <pre class="bg-gray-200 p-3 rounded mt-2">cd registration-page</pre>
            </li>
            <li>Open <code>index.html</code> in your preferred browser to view the page.</li>
        </ol>
        
 <h2 id="usage" class="text-2xl font-semibold mt-8 mb-4">Usage</h2>
   <h3 class="text-xl font-semibold mt-6 mb-2">Validating Input</h3>
        <ul class="list-disc list-inside mb-6">
            <li>Enter information in each field (First Name, Last Name, Email, and Password).</li>
            <li>Click the <strong>Submit</strong> button. If any field is left blank, a red error message will appear below the corresponding field.</li>
        </ul>
    <h3 class="text-xl font-semibold mt-6 mb-2">Responsive Design</h3>
        <ul class="list-disc list-inside mb-6">
            <li>On <strong>desktop (1440px)</strong> screens, the content is displayed side-by-side.</li>
            <li>On <strong>mobile (375px)</strong> screens, the content stacks vertically.</li>
        </ul>
 <h2 id="folder-structure" class="text-2xl font-semibold mt-8 mb-4">Folder Structure</h2>
        <pre class="bg-gray-200 p-3 rounded mb-6">
registration-page/
├── index.html         # Main HTML file
├── styles.css         # Custom CSS (if applicable)
└── README.md          # Project documentation
        </pre>
<h2 id="customization" class="text-2xl font-semibold mt-8 mb-4">Customization</h2>
        <h3 class="text-xl font-semibold mt-6 mb-2">Styling</h3>
        <p class="mb-6">To adjust the styles, you can modify the existing Tailwind CSS classes or add custom CSS in the <code>&lt;style&gt;</code> tag within <code>index.html</code>.</p>
<h3 class="text-xl font-semibold mt-6 mb-2">Validation</h3>
        <p class="mb-6">JavaScript validation logic is handled within the <code>&lt;script&gt;</code> tag in <code>index.html</code>. You can add additional validation functions or modify existing error messages.</p>

        <h3 class="text-xl font-semibold mt-6 mb-2">Media Queries</h3>
        <p class="mb-6">For custom screen sizes, adjust the media queries within the <code>&lt;style&gt;</code> tag.</p>
        <pre class="bg-gray-200 p-3 rounded mb-6">
@media (min-width: 1440px) { /* Styles for desktop */ }
@media (max-width: 375px) { /* Styles for mobile */ }
        </pre>
