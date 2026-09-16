function FilterBar({ filters, onFilterChange }) {

    return (
        <section className="card">

                <h2>Filters</h2>

                <div className="filters">

                    <input
                        type="text"
                        name="search"
                        placeholder="Search tasks..."
                        value={filters.search}
                        onChange={onFilterChange}
                    />

                    <select
                        name="category"
                        value={filters.category}
                        onChange={onFilterChange}
                    >
                        <option value="All">All Categories</option>
                        <option value="Learning">Learning</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>

                    <select
                        name="priority"
                        value={filters.priority}
                        onChange={onFilterChange}
                    >
                        <option value="All">All Priorities</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <select
                        name="status"
                        value={filters.status}
                        onChange={onFilterChange}
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>

                </div>

            </section>
    );
}

export default FilterBar;